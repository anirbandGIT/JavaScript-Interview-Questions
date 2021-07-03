// * Class Heritage
// * Like other languages with object-oriented features,
// * classes in JavaScript can inherit from base classes.

// * implements Clauses
// * You can use an implements clause to check that a class satisfies a particular interface.
// * An error will be issued if a class fails to correctly implement it:

interface Pingable {
  ping(): void;
}

// Classes may also implement multiple interfaces, e.g. class C implements A, B {.
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

class Ball implements Pingable {
  // Class 'Ball' incorrectly implements interface 'Pingable'.
  // Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
  pong() {
    console.log("pong!");
  }
  // to fix this
  ping() {
    console.log("ping!");
  }
}

const sonar = new Sonar();
sonar.ping();

interface Checkable {
  check(name: string): boolean;
}

class NameChecker implements Checkable {
  check(s: string) {
    // Parameter 's' implicitly has an 'any' type.
    // Notice no error here
    // return s.toLowercse() === "ok";

    return s.toLowerCase() === "ok";
    // return "SOMETHING"; // gives error
  }
}

const nameChecker = new NameChecker();
console.log(nameChecker.check("OK"));

interface A {
  x: number;
  y?: number;
}
class C implements A {
  x = 100;
  // y = 200;
}
const c = new C();
// c.y = 10; // Property 'y' does not exist on type 'C'
// console.log(c.y);

// * extends Clauses
// * Classes may extend from a base class.
// * A derived class has all the properties and methods of its base class,
// * and also define additional members.

class Animal {
  legs: number = 4;
  move() {
    console.log("Animal is moving");
  }
}

class Dog extends Animal {
  // constructor() {
  //   super();
  // }

  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
  // move() {
  //   super.move();
  // }

  get numberOfLegs() {
    return this.legs;
  }
}

const bullDog = new Dog();
// Base class method
bullDog.move();
// Derived class method
bullDog.woof(3);
console.log(bullDog.numberOfLegs);

// * Overriding Methods
// * A derived class can also override a base class field or property.
// * You can use the super. syntax to access base class methods.
// * Note that because JavaScript classes are a simple lookup object,
// * there is no notion of a “super field”.
class Base {
  greet() {
    console.log("Hello, world!");
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const derived = new Derived();
derived.greet();
derived.greet("reader");

class NewBase {
  name = "base";
  constructor() {
    console.log("My name is " + this.name);
  }
}

class NewDerived extends NewBase {
  name = "derived";
}

const d = new NewDerived();
