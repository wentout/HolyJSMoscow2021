'use strict';

const opd = Object.getOwnPropertyDescriptors;
const ogp = Object.getPrototypeOf;

const {
    define,
    SymbolReplaceGaia
} = require('mnemonica');

debugger;

const A = define(class A { a = 1 });
const B = define(class B { b = 2 });
const C = define(class C { c = 3 });
const D = define(class D { d = 4 });
const E = define(class E { e = 5 });

debugger;

const a = new A;
const b = new B;
const c = new C;
const d = new D;
const e = new E;

debugger;

const commonProps = opd(ogp({}));

const proxify = function (initial) {
    const props = opd(initial);
    const handler = {
        get(target, prop, receiver) {
            if (prop === Symbol.toPrimitive) {
                // node.js inspector needs this
                // debugger;
                return function () {
                    return 'the ring';
                };
            }
            // any of other symbols are... 
            // emm...
            // how for example Symbol nodejs.utils.custom???
            if (typeof prop === 'symbol') {
                // debugger;
                return undefined;
            }
            if (target[prop]) {
                return target[prop];
            }
            // debugger;
            return Reflect.get(receiver, prop);
        },
        setPrototypeOf(into, value) {
            // Object.setPrototypeOf(into, value);
            // https://262.ecma-international.org/7.0/#sec-immutable-prototype-exotic-objects
            // https://github.com/tc39/ecma262/issues/272

            if (initial[SymbolReplaceGaia]) {
                // debugger;
                initial[SymbolReplaceGaia](value);
                return true;
            }

            let current = initial;
            do {
                current = ogp(current);
            } while (current && ogp(current) !== Object.prototype);

            Object.setPrototypeOf(current, value);
            return true;
        },
        get getPrototypeOf() {
            return function (value) {
                const proto = Reflect.getPrototypeOf(value);
                return value;
            };
        },
        ownKeys(target) {
            const keys = Reflect.ownKeys(target);
            // debugger;
            return keys;
        },
        getOwnPropertyDescriptor(target, prop) {
            if (prop === 'constructor') {
                return {
                    configurable: false
                };
            }
            const answer = props[prop];
            return answer;
        }
    };
    const p = new Proxy(initial, handler);
    return p;
};


debugger;

const ring = (...args) => {

    const initial = proxify(args[0]);
    let current = initial;

    args.slice(1).forEach(arg => {
        const p = proxify(arg);
        debugger;
        Object.setPrototypeOf(current, p);
        current = p;
    });

    debugger;
    Object.setPrototypeOf(current, initial);

    return initial;

};

debugger;

const loop = [a, b, c, d, e];

const theRing = ring(...loop);

debugger;

console.log(theRing.a === 1);
console.log(theRing.b === 2);
console.log(theRing.c === 3);
console.log(theRing.d === 4);
console.log(theRing.e === 5);


loop.forEach(obj => {
    console.log(obj.a === 1);
    console.log(obj.b === 2);
    console.log(obj.c === 3);
    console.log(obj.d === 4);
    console.log(obj.e === 5);
});

// console.log('1', opd(ogp(a)));
// console.log('2', opd(ogp(ogp(ogp(a)))));
// console.log('3', opd(ogp(ogp(ogp(ogp(ogp(a)))))));

debugger;

const tail = {
    z: 123
};


Object.setPrototypeOf(tail, theRing);

console.log('wohoo', tail.z === 123);
console.log('wohoo', tail.a === 1);
console.log('wohoo', tail.b === 2);
console.log('wohoo', tail.c === 3);
console.log('wohoo', tail.d === 4);
console.log('wohoo', tail.e === 5);

debugger;

console.log('a instanceof A : ', a instanceof A);

debugger;

// console.log('b instanceof B : ', b instanceof B);
// console.log('c instanceof C : ', c instanceof C);
// console.log('d instanceof D : ', d instanceof D);
// console.log('e instanceof E : ', e instanceof E);

debugger;

console.log('\nWoW Now!\n');

debugger;

// console.log('a instanceof B : ', a instanceof B);
// console.log('a instanceof C : ', a instanceof C);
// console.log('a instanceof D : ', a instanceof D);
// console.log('a instanceof E : ', a instanceof E);

debugger;

console.log('\nIt was wow, isn\'t it?!\n');

// try {
//     debugger;
//     console.log('a instanceof Object : ', a instanceof Object);
// } catch (e) {
//     console.error(e);
// }

debugger;