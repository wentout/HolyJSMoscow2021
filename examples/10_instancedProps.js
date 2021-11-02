
class BaseClass {
    get someProp() {
        if (this instanceof BaseClass) {

            return 123;

        }
        throw Error('Access Denied!');
    }
};

debugger;

const { someProp } = new BaseClass;

debugger;

const derived = {
    someProp
};

try {

    // unfortunately : this will work...

    console.log(derived.someProp);

    debugger;

} catch (error) {

    // we will never get here
    console.error(error);
}