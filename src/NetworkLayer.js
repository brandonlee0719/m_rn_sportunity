/* eslint-disable no-console */

import io from 'socket.io-client';

window.navigator.userAgent = 'react-native';

export default class NetworkLayer {
  constructor(...args) {
    const host = args[0];
    const ioHost = host.substr(0, host.lastIndexOf('/'));

    this._socket = io(ioHost, {
      jsonp: false,
      transports: ['websocket'],
    });


    this._socket.on('connect', () => {

      // on connect
      this.authenticate();
      Object.entries(this._requests).forEach(([id, request]) => {
        this.subscribe(id, request);
      });
    });


    this._requests = Object.create(null);

    this._socket.on('subscription update', ({ id, data, errors }) => {
      //console.log("subscription update - data", data);
      const request = this._requests[id];
      if (!request) {
        return;
      }

      if (errors) {
        request.onError(errors);
      } else {
        request.onNext({data});
      }
    });

    this._socket.on('subscription closed', (id) => {
      const request = this._requests[id];
      if (!request) {
        return;
      }

      request.onCompleted();
      delete this._requests[id];
    });

    this._socket.on('error', (error) => {
      Object.values(this._requests).forEach((request) => {
        request.onError(error);
      });
    });
  }


  setToken(token) {

    this.token = token;
    this.authenticate();

  }

  authenticate() {
    if (this.token) {
      this.addUser(this.token)
    }
  }

  addUser(token) {
    this.emitTransient('addUser', { token });
  }


  sendSubscription(id, request) {
    this._requests[id] = request;
    this.subscribe(id, request);
    return {
      dispose: () => {
        this.emitTransient('unsubscribe', id);
        delete this._requests[id];
        request.onCompleted();
      },
    };
  }


  emitTransient(...args) {

    // For transient state management, we re-emit on reconnect anyway, so no
    // need to use the send buffer.
    if (!this._socket.connected) {
      return;
    }
    
    this._socket.emit(...args);
  }

  subscribe(id, request) {

    this.emitTransient('subscribe', {
      id,
      query: request.query,
      variables: request.variables,
    });

  }


  disconnect() {
    this._socket.disconnect();

    this._requests.forEach(request => {
      request.onCompleted();
    });
  }


}
