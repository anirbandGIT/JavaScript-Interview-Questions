// function outer() {
function outer(b) {
  // passing args also worls as args are part of outer function
  //   var a = 10;
  function inner() {
    console.log(a + b);
  }
  //   var a = 10; // still forms a closure
  let a = 10; // still forms a closure

  return inner;
}

// outer()();
const innerFunction = outer(5);
innerFunction();

function grandPa(c) {
  return function parent(b) {
    // var a = 10;
    function child() {
      console.log(a + b + c);
    }

    return child;
  };
}
let a = 100; // as child() did not find in lexical scope it tries to find in global scope
// grandPa(2)(5)();
const parentFunction = grandPa(2);
const childFunction = parentFunction(5);
childFunction();

// var counter = 0;
// function incrementCounter() {
//   return ++counter;
// }

// console.log(incrementCounter());
function counter() {
  var counter = 0;
  return function incrementCounter() {
    return ++counter;
  };
}
// console.log(counter()());

const counter1 = counter();
const counter2 = counter();

console.log(counter1());
console.log(counter2());
