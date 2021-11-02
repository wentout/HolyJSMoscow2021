
debugger;

function foo() {}

var bar = { a: 'a'};

foo.prototype = bar; 

debugger;

baz = Object.create(bar);

debugger;

console.log( baz instanceof foo ); // true

debugger;