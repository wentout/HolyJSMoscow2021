'use strict';

debugger;

const ogp = Object.getPrototypeOf;

const myNumber = new Number(5);
const arr = new Array(1, 2, 3);
const example = {};

console.log(ogp(arr));					// Object(0) []

console.log(ogp(ogp(arr)));				// [Object: null prototype] {}

Object.setPrototypeOf(example, arr);

Object.defineProperty(myNumber, 'extracted', {
	get () {
		return myNumber.valueOf();
	}
});
Object.defineProperty(myNumber, Symbol.toPrimitive, {
	get () {
		return function () {
			return myNumber.valueOf();
		};
	}
});
Object.defineProperty(example, 'addition', {
	get () {
		return example.map(val => val + myNumber);
	}
});

Object.setPrototypeOf(ogp(arr), myNumber);

console.log('example instanceof Array  → ', example instanceof Array);	// true
console.log('example instanceof Object → ', example instanceof Object);	// true
console.log('example instanceof Number → ', example instanceof Number);	// true
console.log('example[0]                → ', example[0]);			// 1
console.log('example.extracted         → ', example.extracted);			// 5
console.log('example + 2               → ', example + 2);			// 7
console.log('example.addition          → ', example.addition);			// [6, 7, 8]

debugger;