
// prototype introspection

debugger;

class TheClass {};

debugger;

const instance = new TheClass;

debugger;

console.log(Object.getOwnPropertyDescriptor(TheClass, 'prototype'));

debugger;

console.log(Object.getOwnPropertyDescriptor(function () {}, 'prototype'));

debugger;

console.log('async : ', Object.getOwnPropertyDescriptor(async function () {}, 'prototype'));

debugger;

console.log('arrow : ', Object.getOwnPropertyDescriptor(() => {}, 'prototype'));

debugger;

