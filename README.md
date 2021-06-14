# JavaScript Interview Questions

## Q1. Write a function add(1)(1) that will add two numbers.

## Answer:

<pre>
const add = function(x) {
  return function(y) {
    console.log(x + y)
  }
}

add(1)(1) // 2
</pre>

With ES6 arror shorthand syntax this can be done as:

<pre>
const add = (x) => (y) => (console.log(x + y));

add(1)(1) // 2
</pre>

## Q2. An array, say arr=[0,0,2,4,5,5,6,7], has repeating elements, how to remove same and also remove the odd numbers from array?

## Answer:

<pre>
const arr = [0, 0, 2, 4, 5, 5, 6, 7];
let distinctArray = [...new Set(arr)];
distinctArray = distinctArray.filter(elem => elem === 0 || (elem > 0 && elem % 2 === 0))

console.log(distinctArray) // [0, 2, 4, 6]
</pre>

## Q3 How to merge arr1=[1,2,3] with arr2=[4,5]? Also how to merge obj1={a:1,b:2,c:3} with obj2={d:4,e:5}?

## Answer:

<pre>
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const obj1 = {a: 1,b: 2,c: 3};
const obj2 = {d: 4,e: 5};

const mergedArr = [...arr1,...arr2];
console.log(mergedArr);
// [1,2,3,4,5]

const mergedObj = {...obj1,...obj2}
console.log(mergedObj)
// {a: 1,b: 2,c: 3,d: 4,e: 5}
</pre>

We can also merge two objects using Object.assign as:

<pre>
const obj1 = {a: 1,b: 2,c: 3};
const obj2 = {d: 4,e: 5};
const mergedObj = Object.assign(obj1, obj2);

console.log(mergedObj);
// {a: 1,b: 2,c: 3,d: 4,e: 5}
</pre>

## Q4 How to find the second largest array element in an array, say arr1=[2,5,14,8,3,11,1]?

## Answer:

## Q5 A variation in Q1 write a function while will give output:

## Answer:

<pre>
console.log(sum(2,3));   // 5
console.log(sum(2)(3));  // 5
</pre>

## Q6 What will be the output of following code?

<pre>
(function() {
  var a = b = 5;
})();

console.log(b);
</pre>

## Please explain with presudo code if possible.

## Q7 What will be the output for below code snippet?

<pre>
for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
</pre>

## Q8 Given a string str="Hello, World", reverse each word in the sentence.

## Q9 What will be output of:

<pre>
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
</pre>

## Also explain why?

## Q10 List 3 ways to clear an array and an object.

## Q12 Given two strings, write a function that take them as inputs and return true if they are anagrams of one another.

## Q14 
## i. Write a program to find factorial of a number. Write using recursion and not using recursion.
## ii. Write a program to print n terms of Fibonacci series. Write using recursion and not using recursion.
