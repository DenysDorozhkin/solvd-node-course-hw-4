import { person } from "./task-1.js";

function observeObject(object, callback) {
  return new Proxy(object, {
    get(target, property, receiver) {
      callback(property, "get");
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      callback(property, "set");
      return Reflect.set(target, property, value, receiver);
    },
  });
}

function logCallback(property, action) {
  console.log(`${property}" was ${action} on the object.`);
}

const observedPerson = observeObject(person, logCallback);
