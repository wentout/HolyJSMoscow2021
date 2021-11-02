'use strict';

debugger;

const vectorObj = new Number(5);

debugger;

const proxyAsNumber = new Proxy(vectorObj, {
	get(target, prop) {
		if (prop === Symbol.toPrimitive) {
			return function (hint) {
				if (hint === 'number') {
					debugger;
					return vectorObj.valueOf();
				}

				debugger;
				throw new TypeError('Type Mismatch!');
			}
		}
		debugger;
		return target.valueOf();
	}
});

debugger;

console.log(proxyAsNumber);
console.log(vectorObj);
console.log(proxyAsNumber === vectorObj);

debugger;

try {
	debugger;
	// so it works for regular calculations
	console.log(2 + vectorObj);			// 7
	debugger;

	// but fails for proxified number
	debugger;
	console.log(0 + proxyAsNumber);		// 5
} catch (error) {

	debugger;
	console.error(error);

}

debugger;

const whyNotJustObjects = {};

console.log(' look ! : → ', 0 + whyNotJustObjects);

Object.setPrototypeOf(whyNotJustObjects, vectorObj);

try {
	whyNotJustObjects.valueOf();
} catch (error) {
	debugger;
	console.error(error);
}

debugger;

whyNotJustObjects[Symbol.toPrimitive] = function () {
	debugger;
	const toBeNumber = Object.getPrototypeOf(this);
	return toBeNumber.valueOf();
};

debugger;

console.log(' look ! : → → → ', 0 + whyNotJustObjects);

debugger;