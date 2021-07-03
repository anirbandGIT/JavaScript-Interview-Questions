// * Fields
// * A field declaration creates a public writeable property on a class:

// class Point {
//   x: number; // will be any if not defined
//   y: number;
// }

// class Point {
//   x: number = 0;
//   y: number = 0;
// }

// const pt = new Point(); // making an instance of Point class
// pt.x = 1; // allowed
// pt.y = 1; // allowed
// // pt.x = "0"; // not allowed

// console.log(`${pt.x}, ${pt.y}`); // 1, 1

// class GoodGreeter {
//   name: string; // Property 'name' has no initializer and is not definitely assigned in the constructor.
//  ! Not initialized, but no error
// name!: string;

// * strictPropertyInitialization controls if the class fields need to be assigned in constuctor
//   constructor() {
//     this.name = "hello";
//   }
// }

// * readonly
// * Fields may be prefixed with the readonly modifier.
// * This prevents assignments to the field outside of the constructor.

class Greeter {
  readonly name: string = "world";

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  //   newNameSetter() {
  //     this.name = "not ok"; // as name is readonly
  //   }
}

const g = new Greeter();
// g.name = "also not ok"; // as name is readonly

// * Constructors
// * Class constructors are very similar to functions.
// * You can add parameters with type annotations, default values, and overloads:
// class Point {
//   x: number;
//   y: number;

//   // Normal signature with defaults
//   constructor(x = 10, y = 10) {
//     this.x = x;
//     this.y = y;
//   }
// }
// const pt = new Point();
// console.log(`${pt.x}, ${pt.y}`); // 10, 10

class Point {
  // Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }
}

interface IBox {
  x: number;
  y: number;
  height: number;
  width: number;
}

class Box {
  public x: number;
  public y: number;
  public height: number;
  public width: number;

  // overloads
  constructor();
  constructor(obj: IBox);
  constructor(obj?: any) {
    this.x = (obj && obj.x) || 0;
    this.y = (obj && obj.y) || 0;
    this.height = (obj && obj.height) || 0;
    this.width = (obj && obj.width) || 0;
  }
}

const box1 = new Box();
console.log(box1); // Box { x: 0, y: 0, height: 0, width: 0 }

const box2 = new Box({ x: 10, y: 10, height: 100, width: 100 });
console.log(box2); // Box { x: 10, y: 10, height: 100, width: 100 }

// * Super Calls
// * Just as in JavaScript, if you have a base class,
// * you’ll need to call super(); in your constructor body before using any this. members:

class Base {
  k = 4;
}

// ! extending is not same as making a instance
class Derived extends Base {
  constructor() {
    // * Prints a wrong value in ES5; throws exception in ES6
    // console.log(this.k); // * 'super' must be called before accessing 'this' in the constructor of a derived class.

    super();
    console.log("k", this.k); // k 4
  }
}

const derived = new Derived();

// * Getters / Setters
// * Classes can also have accessors:
class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}

const c = new C();
console.log("c.length initially", c.length); // c.length initially 0
c.length = 100;
console.log("c.length after setter", c.length); // c.length after setter 100

// * Since TypeScript 4.3,
// * it is possible to have accessors with different types for getting and setting.

class Thing {
  _size = 0;

  get size(): number {
    return this._size;
  }
  set size(value: string | number | boolean) {
    let num = Number(value);

    // Don't allow NaN, Infinity, etc

    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }

    this._size = num;
  }
}
