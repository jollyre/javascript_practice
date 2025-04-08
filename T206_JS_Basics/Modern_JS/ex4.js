function placeOrder(orderId, callBack) {
  return new Promise((resolve) => {
    console.log(`order with ${orderId} is placed`);
    resolve(orderId);
  });
}

function prepareOrder(orderId, callBack) {
  return new Promise((resolve) => {
    console.log(`order with ${orderId} is prepared`);
    resolve(orderId);
  });
}

function dispatchOrder(orderId, callBack) {
  return new Promise((resolve) => {
    console.log(`order with ${orderId} is goes for dispatchOrder`);
    resolve(orderId);
  });
}

placeOrder(1)
  .then(prepareOrder)
  .then(dispatchOrder)
  .catch((error) => {
    console.log("error");
  });
