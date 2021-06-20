// var user = {
//   name: "John Doe",
//   age: 34,
// };

// console.log(user.__proto__);

myObjectPrototype = {
  basic: 15000,
  HRA: 8000,
  otherCompensations: 5000,
  getSalary: function () {
    return this.basic + this.HRA + this.otherCompensations;
  },
  getName: function () {
    return this.name;
  },
};

var employee1 = {
  name: "John Doe",
};

// ! NOT RECOMMENDED
employee1.__proto__ = myObjectPrototype;
// console.log(employee1.name);
// console.log(employee1.basic); // from prototype
// console.log(employee1.getSalary()); // from prototype
// console.log(employee1.getName()); // as this.name is not defined it picks up name from employee1

const employee = function (name) {
  // * const employee: typeof employee
  this.name = name;
  this.basic = 15000;
  this.HRA = 8000;
  this.otherCompensations = 5000;
  //   this.getSalary = function () {
  //     return this.basic + this.HRA + this.otherCompensations;
  //   };
  //   this.getName = function () {
  //     return this.name;
  //   };
};

// * ABOVE IS EQUAL TO
// class employee {
//   constructor(name) {
//     this.name = name;
//     this.basic = 15000;
//     this.HRA = 8000;
//     this.otherCompensations = 5000;
//     this.getSalary = function () {
//       return this.basic + this.HRA + this.otherCompensations;
//     };
//     this.getName = function () {
//       return this.name;
//     };
//   }
// }

// prototype is available for classes or function that have a constructor
// console.log(employee.prototype); // {} initially

const employee2 = new employee("Peter Parker"); // creating an instance of employee
// * instances do not have .prototype

// console.log(employee2.name);
// console.log(employee2.basic);
// console.log(employee2.getSalary());
// console.log(employee2.getName());

// employee.prototype = {
//   getSalary: function () {
//     return this.basic + this.HRA + this.otherCompensations;
//   },
//   getName: function () {
//     return this.name;
//   },
// };

// * instead let's do it as
employee.prototype = myObjectPrototype;

const employee3 = new employee("Mary Jane");

console.log(employee3.name);
console.log(employee3.basic);
console.log(employee3.getSalary());
console.log(employee3.getName());

// * rather than make function in the class or function which will be used to make instances
// * it is better to add functions to the prototype as the prototype will not take memory space
// * every time a instance is created
