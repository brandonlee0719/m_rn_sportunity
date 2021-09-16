// @flow
type StoredObject = any
type StoreType = {
  [string]: ?StoredObject,
}

let store: StoreType = {};

const setIt = (object: StoreType, key: string, value: any): StoreType =>
  (object[key] = value) && object;

export const unregisterAll = (): StoreType => store = {};
type StoredObjectName = string
type MethodName = string
type RegisterEntryType = {
  name: StoredObjectName,
  data: StoredObject,
}

export const register = ({ name, data } : RegisterEntryType) =>
  setIt(store,name,data);

export const call = (
  object: StoredObject,
  methodName: MethodName,
  item: StoredObjectName,
  ...args
) => (object[methodName] || mockedMethod(item, methodName))(...args);

export const mockedMethod = (ref: StoredObjectName, name: MethodName) =>
  (...args) =>
    console.log(`calling a mockedMethod ${ref + '.' + name} with `,...args);
export const mockWith = (objectName, methodName: MethodName) => ({
  [methodName]: mockedMethod(objectName, methodName),
  isMocked: true,
});

export const caller =
  (item: StoredObjectName, mock: any) =>
    (methodName: MethodName, ...args) => call(
      store[item] || mock || mockWith(item, methodName),
      methodName,
      item,
      ...args
    );

type CallerObject = {
  call: () => void,
}
export const object = (item: string, mock: any): CallerObject =>
  ({ call: caller(item, mock), _ref: store[item] })

export const isNotEqual = (refA) => (refB) => refB != refA
export const keysWithout = (object, notAllowedKey) =>
  Object.keys(object).filter(isNotEqual(notAllowedKey))
export const pack = (arr: Array<any>, ref: StoreType) => arr.reduce(
  (mem, allowedKey) => ({ ...mem, [allowedKey]: ref[allowedKey] }),
  {}
)

type UnregisterEntryType = {
  name: StoredObjectName
}
export const unregister = ({ name }: UnregisterEntryType) =>
  store = pack(keysWithout(store, name), store)
