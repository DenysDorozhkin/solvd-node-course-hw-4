const product = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
};

Object.defineProperties(product, {
  price: {
    writable: false,
    enumerable: false,
  },
  quantity: {
    writable: false,
    enumerable: false,
  },
});

function getTotalPrice(product) {
  const productDescriptors = Object.getOwnPropertyDescriptors(product);
  return productDescriptors.price.value * productDescriptors.quantity.value;
}

function deleteNonConfigurable(object, property) {
  if (object.hasOwnProperty(property)) {
    if (!Object.getOwnPropertyDescriptor(object, property).configurable) {
      throw new Error(
        `${property} in ${object} is non-configurable and cannot be deleted.`
      );
    }
    delete object[property];
  }
}
