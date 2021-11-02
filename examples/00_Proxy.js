const base = Object.create(null);
const proto = new Proxy(base, {
    get(target, prop) {
        console.log('prop get', prop);
        debugger;
        return 123;
    },
    set(target, prop) {
        console.log('prop set', prop);
        debugger;
        return true;
    }
});

const instance = {};


Reflect            // Inherit !
    .setPrototypeOf
    (instance, proto);


// !!! review instance
debugger;


debugger;
console.log(instance.someField);
debugger;

debugger;
console.log(instance.someField = 123);
debugger;