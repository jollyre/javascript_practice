//what is callback?
//as a parameter we can pass one fun to another fun

// function greet(name = "Raja", callback) {
//   console.log(`hello ${name}`);
//   callback();
// }

// function sayGoodBy() {
//   console.log("GoodBy");
// }

// greet("Ramesh", sayGoodBy);

//------------------------------------

// function calculate(a, b, callback) {
//   let result = a + b;
//   callback(result);
// }

// function opearation(result) {
//   console.log(result);
// }

// calculate(10, 20, opearation);

//-------------------------------------

//customer => placeOrder()
//prepareOrder
//DispatchOrder

function placeOrder(orderId, callback) {
  console.log(`your order is placed with order id is ::${orderId}`);
  prepareOrder(orderId);
}

function prepareOrder(orderId, callback) {
  console.log(`your order is prepared with order id is ::${orderId}`);
  dispatchOrder(orderId);
}

function dispatchOrder(orderId) {
  console.log(`your order is goes for dispatch with order id is ::${orderId}`);
}

placeOrder(33445, prepareOrder);
