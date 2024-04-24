function validateObject(object, schema) {
  for (let property in schema) {
    if (schema.hasOwnProperty(property)) {
      if (!(property in object)) {
        return false;
      }
      if (typeof object[property] !== schema[property].type) {
        return false;
      }
      if (schema[property].validation) {
        if (!schema[property].validation(object[property])) {
          return false;
        }
      }
    }
  }
  return true;
}
