'use strict';

const BasePrototype = require('typeomatica');

class ProhibitedBase extends BasePrototype {
    constructor() {
        super();
        this.prohibitedValue = 'example';
    }
};

debugger;

const instanceForProhibition = new ProhibitedBase;

debugger;


// And the Network IS ...

class NetworkBase extends BasePrototype(instanceForProhibition) { };

debugger;

const networkedInstance = new NetworkBase;

debugger;

try {

    debugger;
    console.log(networkedInstance.prohibitedValue);

} catch (error) {
    debugger;
    // restricted, as value of the other object
    console.error(error);
}

debugger;
