function deepCloneObject(object, clonedObjects = new WeakMap()) {
  if (object === null || typeof object !== "object") {
    return object;
  }
  if (clonedObjects.has(object)) {
    return clonedObjects.get(object);
  }
  const cloned = Array.isArray(object) ? [] : {};
  clonedObjects.set(object, cloned);
  for (let key in object) {
    cloned[key] = deepCloneObject(object[key], clonedObjects);
  }
  return cloned;
}
