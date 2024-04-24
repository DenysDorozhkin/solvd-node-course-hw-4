import { person } from "./task-1.js";

function createImmutableObject(object) {
  const immutableObject = {};
  Object.keys(object).forEach((key) => {
    if (typeof object[key] === "object" && object[key] !== null) {
      immutableObject[key] = Array.isArray(object[key]) ? [] : {};
      immutableObject[key] = createImmutableObject(object[key]);
    } else {
      Object.defineProperty(immutableObject, key, {
        value: object[key],
        writable: false,
        configurable: true,
        enumerable: true,
      });
    }
  });
  return immutableObject;
}

const immutablePerson = createImmutableObject(person);
