
debugger;

const SingletonWrapper = function () { };

SingletonWrapper.prototype = Object.create(process);

SingletonWrapper.prototype.constructor = SingletonWrapper;

const instance = new SingletonWrapper;

debugger;

console.log(instance);

debugger;

console.log(instance.cwd());

debugger;

console.log(instance.uptime());

debugger;