
// just, may be you want it 

// primitives

console.log(5 + 'string');   // ok

console.log('str' + true);   // ok

console.log({} + 'string');  // also

// object's fields

const someObject = {
    num: 123,
    str: '123',
    obj: {}
};

console.log(someObject.num + 'string'); // ok

console.log(someObject.str + true);     // ok

console.log(someObject.obj + 'string'); // also
