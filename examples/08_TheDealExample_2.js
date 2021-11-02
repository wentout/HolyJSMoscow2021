'use strict';

// yea... we did lib for this talk
const BasePrototype = require('typeomatica');

debugger;

// all you need is one only extend
class Base extends BasePrototype {
    constructor() {
        super();

        this.numberValue = 123;
        this.stringValue = '123';

        debugger;
        this.arrayValue = [1, 2, 3];

        debugger;
        const ObjectValue = function (sample) {
            this.sample = sample;
        };
        this.objectValue = new ObjectValue('initial');

    }
};

debugger;

const baseInstance = new Base;

debugger;

// Symbol.toPrimitive hint exapmle

try {
    debugger;
    1 + baseInstance.numberValue;
} catch (error) {
    debugger;
    console.error(error);
}

debugger;

baseInstance.numberValue = 321;
baseInstance.stringValue = '321';

console.log(+baseInstance.numberValue);
console.log(`${baseInstance.stringValue}`);


debugger;
// Array example
try {
    debugger;
    baseInstance.arrayValue = 123;
} catch (error) {
    debugger;
    console.error(error);
}

debugger;
// correct assignment example
baseInstance.arrayValue = [3, 2, 1];

debugger;
// Constructed Object Example
try {
    debugger;
    baseInstance.objectValue = {};
} catch (error) {
    debugger;
    console.error(error);
}


debugger;
// correct assignment example
baseInstance.objectValue = new baseInstance.objectValue.constructor('continue');

debugger;

// JSON.stringify

console.log(JSON.stringify(baseInstance));

debugger;


// .getPrototypeOf

const proto = Reflect.getPrototypeOf(baseInstance);
console.log(proto);
debugger;

try {
    
    const protoProto = Reflect.getPrototypeOf(Reflect.getPrototypeOf(baseInstance));
    debugger;
    console.log(protoProto);

} catch (error) {

    debugger;
    console.error(error);

}

debugger;
