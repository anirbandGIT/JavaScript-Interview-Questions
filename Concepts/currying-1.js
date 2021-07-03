const multiply = function(x, y) {
console.log(x*y);
}

multiply(1,2);
let newMultiply = multiply.bind(this, 2);
newMultiply(6);

const anotherNewMultiply = function (x) {
    return function (y) {
        console.log(x*y)
    }
}

const myMultiply = anotherNewMultiply(2);
myMultiply(4);
myMultiply(3);