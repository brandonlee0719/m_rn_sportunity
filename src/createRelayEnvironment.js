/**
 * @flow
 */
import NetworkLayer from './NetworkLayer'

import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';

//const {installRelayDevTools} = require('relay-devtools');
//installRelayDevTools();

import RelayQueryResponseCache from 'relay-runtime/lib/RelayQueryResponseCache';
import conf from 'sportunity/conf/constants.json';

const oneMinute = 60 * 1000;
const cache = new RelayQueryResponseCache({ size: 500, ttl: oneMinute * 10 });

export let backendUrl = conf.backendUrl ;
let isFirstQueryDone = false ;
let subscriptionClient
let id = 0
let token;

export function initNetworkLayer(initToken) {

  const FETCH_TIMEOUT = 2500;
  let didTimeOut = false;

  let promise1 = new Promise(function(resolve, reject) {
    const timeout = setTimeout(function() {
      didTimeOut = true;
      reject(new Error('Request timed out'));
    }, FETCH_TIMEOUT);
    
    return fetch(backendUrl + '/graphql', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }, // Add authentication and other headers here
    })
    .then(() => {
      clearTimeout(timeout);

      isFirstQueryDone = true;
      subscriptionClient = new NetworkLayer(backendUrl + '/graphql',
        initToken
        ? {headers: {initToken}}
        : {}
      )
      
      if (initToken)
        subscriptionClient.setToken(initToken)
      
      token = initToken
      cache.clear();
    })
    .catch(err => {
      console.log("fetch failed !", err)
      if (didTimeOut) return ;
      reject(err)
    })
  })
  .catch(err => {
    console.log("1st promise error ! "+ backendUrl + '/graphql', err)
    isFirstQueryDone = true;
    backendUrl = conf.secondaryBackendUrl;
    subscriptionClient = new NetworkLayer(backendUrl + '/graphql',
      initToken
      ? {headers: {initToken}}
      : {}
    )
    if (initToken)
      subscriptionClient.setToken(initToken)
    
    token = initToken
    cache.clear();
  })
}

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
fetchQuery = (operation, variables, cacheConfig, uploadables) => {
  const queryID = operation.text;
  const isMutation = operation.operationKind === 'mutation';
  const isQuery = operation.operationKind === 'query';
  const forceFetch = cacheConfig && cacheConfig.force;

  // Try to get data from cache on queries
  const fromCache = cache.get(queryID, variables);
  if (isQuery && fromCache !== null && !forceFetch) {
    return fromCache;
  }

  if (isFirstQueryDone) {
    return fetchTheQuery(operation, variables, cacheConfig, uploadables)
  }
  else {
    return wait(3000)
    .then(() => {
      console.log("waited, BACKENDURL "+ backendUrl + '/graphql', isFirstQueryDone)
      return fetchTheQuery(operation, variables, cacheConfig, uploadables)
    })
  }
}

fetchTheQuery = (operation, variables, cacheConfig, uploadables) => {
  const queryID = operation.text;
  const isMutation = operation.operationKind === 'mutation';
  const isQuery = operation.operationKind === 'query';
  const forceFetch = cacheConfig && cacheConfig.force;

  var start = new Date().getTime();

  return fetch(backendUrl + '/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: token || ''
    }, // Add authentication and other headers here
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  })
  .then(response => 
    response.json()
  )
  .then(json => {
    console.log("query", operation);
    console.log("variables", variables);
    console.log("response", json);
    var end = new Date().getTime();
    var time = end - start;
    console.log('Execution time: ', time);
    // Update cache on queries
    if (isQuery && json) {
      cache.set(queryID, variables, json);
    }
    // Clear cache on mutations
    if (isMutation) {
      cache.clear();
    }

    return json;
  })
  .catch(err => {
    console.log("fetch failed ! "+ backendUrl + '/graphql', err)
  })
}
var wait = ms => new Promise((r, j)=>setTimeout(r, ms))

const setupSubscription = (config, variables, cacheConfig, observer) => {
  const query = config.text

  const onNext = (result) => {
    observer.onNext(result)
  }

  const onError = (error) => {
    observer.onError(error)
  }

  const onCompleted = () => {
    observer.onCompleted()
  }
  let client = {
    dispose: () => {}
  }
  if (subscriptionClient)
     client = subscriptionClient.sendSubscription(id, {query, variables, onNext, onError, onCompleted});
  id++
  return client;
  //client.dispose()
}

export const clearCache = () => {
  cache.clear()
}

// Create a network layer from the fetch function
const network = Network.create(fetchQuery, setupSubscription);

const source = new RecordSource();
const store = new Store(source);

const env = new Environment({
  network,
  store,
});

export default env;
