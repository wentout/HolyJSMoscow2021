
class BaseClass {
	someProp = 123
};

debugger;

const { someProp } = new BaseClass;

debugger;

const derived = {
	someProp
};

debugger;


// Sure, then we may have the following!


debugger;

class FirstClass {
	firstProp = 123
};

class SecondClass {
	secondProp = 123
};

debugger;

const { firstProp } = new FirstClass;
const { secondProp } = new SecondClass;

debugger;

const multiDerived = {
    firstProp,
    secondProp
};

debugger;
