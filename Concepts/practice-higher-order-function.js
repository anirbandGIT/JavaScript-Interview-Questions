// * CONCEPT OF CALLBACK
// function callback() {
//   console.log("HEY I AM A CALLBACK");
// }
// function y(callback) {
//   callback();
// }
// y(callback);

const radius = [1, 2, 3]; // we need to find the area, circumference and diameter

// * none of the below code is DRY
// function calculateAreaOfCircle(radiusValues) {
//   const output = [];
//   for (rad of radiusValues) {
//     output.push(Math.PI * rad * rad);
//   }
//   return output;
// }

// function calculateCircumferenceOfCircle(radiusValues) {
//   const output = [];
//   for (rad of radiusValues) {
//     output.push(2 * Math.PI * rad);
//   }
//   return output;
// }

// function calculateDiameterOfCircle(radiusValues) {
//   const output = [];
//   for (rad of radiusValues) {
//     output.push(2 * rad);
//   }
//   return output;
// }

// console.log("Area -> ", calculateAreaOfCircle(radius));
// console.log("Circumference -> ", calculateCircumferenceOfCircle(radius));
// console.log("Diameter -> ", calculateDiameterOfCircle(radius));

// * one solution to make it DRY
// function calculateAreaOfCirle(radius) {
//   return Math.PI * radius * radius;
// }

// function calculateAreaOfCircle(radiusValues) {
//   const output = [];
//   for (rad of radiusValues) {
//     output.push(calculateAreaOfCirle(rad));
//   }
//   return output;
// }

// console.log("Area -> ", calculateAreaOfCircle(radius));

// * higher order function solution
function calculateAreaOfCirle(radius) {
  return Math.PI * radius * radius;
}

function calculateCicumferenceOfCircle(radius) {
  return 2 * Math.PI * radius;
}

function calculateDiameterOfCircle(radius) {
  return 2 * radius;
}

function calculateCircle(radiusValues, callbackCalculator) {
  const output = [];
  for (rad of radiusValues) {
    output.push(callbackCalculator(rad));
  }
  return output;
}

// console.log("Area -> ", calculateCircle(radius, calculateAreaOfCirle));
// console.log(
//   "Circumference -> ",
//   calculateCircle(radius, calculateCicumferenceOfCircle)
// );
// console.log(
//   "Diameter -> ",
//   calculateCircle(radius, calculateDiameterOfCircle)
// );

// * or well we can just use map
// console.log("Area -> ", radius.map(calculateAreaOfCirle));
// console.log("Circumference -> ", radius.map(calculateCicumferenceOfCircle));
// console.log("Diameter -> ", radius.map(calculateDiameterOfCircle));

// why not add it to the prototype and make it reusable
// Array.prototype.circleCalc = function (radArr, logic) {
//   const output = [];
//   for (rad of radArr) {
//     output.push(logic(rad));
//   }
//   return output;
// };

// * trying with call()/ apply()
function circleCalc(logic) {
  const output = [];
  for (rad of this) {
    output.push(logic(rad));
  }
  return output;
}

console.log("Area w/ call()-> ", circleCalc.call(radius, calculateAreaOfCirle));

// * adding to Array.prototype
Array.prototype.calculateCircleProps = function (radius, logic) {
  const output = [];
  for (rad of this) {
    output.push(logic(rad));
  }
  return output;
};

console.log(
  "Area w/ Array.prototype -> ",
  radius.calculateCircleProps(radius, calculateAreaOfCirle)
);
console.log(
  "Circumference w/ Array.prototype -> ",
  radius.calculateCircleProps(radius, calculateCicumferenceOfCircle)
);
console.log(
  "Diameter w/ Array.prototype -> ",
  radius.calculateCircleProps(radius, calculateDiameterOfCircle)
);

// let us use this now
Array.prototype.circleCalc = function (logic) {
  const output = [];
  for (rad of this) {
    output.push(logic(rad));
  }
  return output;
};

console.log(
  "Area w/ Array.prototype Updated -> ",
  radius.circleCalc(calculateAreaOfCirle)
);
