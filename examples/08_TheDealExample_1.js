'use strict';

// yea... we did lib for this talk
const BasePrototype = require('typeomatica');

debugger;

// all you need is one only extend
class Base extends BasePrototype {
    constructor() {
        debugger;
        super();

        debugger;

        this.numberValue = 123;

        debugger;

        this.stringValue = '123';
        this.booleanValue = true;

        this.nullValue = null;
        this.undefinedValue = undefined;

        this.symbolValue = Symbol('an example');
        this.bigIntValue = BigInt(0);

        this.objectValue = {};
    }
};

debugger;
const baseInstance = new Base;

debugger;

const keysOfInstance = Object.keys(baseInstance);
console.log(keysOfInstance);

debugger;

try {
    debugger;
    baseInstance.numberValue = '123';
} catch (error) {
    debugger;
    console.error(error);
}

try {
    debugger;
    baseInstance.stringValue = 123;
} catch (error) {
    debugger;
    console.error(error);
}

try {
    debugger;
    baseInstance.booleanValue = '';
} catch (error) {
    debugger;
    console.error(error);
}


try {
    debugger;
    baseInstance.nullValue = undefined;
} catch (error) {
    debugger;
    console.error(error);
}

try {
    debugger;
    baseInstance.undefinedValue = null;
} catch (error) {
    debugger;
    console.error(error);
}

try {
    debugger;
    baseInstance.symbolValue = 'an example';
} catch (error) {
    debugger;
    console.error(error);
}

try {
    debugger;
    baseInstance.bigIntValue = 0;
} catch (error) {
    debugger;
    console.error(error);
}


try {
    debugger;
    baseInstance.objectValue = 123;
} catch (error) {
    debugger;
    console.error(error);
}