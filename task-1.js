export const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};

Object.keys(person).forEach((key) => {
  Object.defineProperty(person, key, {
    writable: false,
  });
});

Object.defineProperty(person, "updateInfo", {
  value: function (newInfo) {
    for (let key in newInfo) {
      if (this.hasOwnProperty(key)) {
        if (!Object.getOwnPropertyDescriptor(this, key).writable) {
          throw new Error(`${key} is read-only and cannot be updated.`);
        } else {
          this[key] = newInfo[key];
        }
      }
    }
  },
});

Object.defineProperty(person, "address", {
  value: {},
  writable: true,
  configurable: false,
  enumerable: false,
});
