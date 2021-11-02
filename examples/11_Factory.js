function Factory(previous) {
    function MyKind(state) {
        this.state = state;
    };
    debugger; // see prototype.constructor
    MyKind.prototype = previous;
    // let's keep constructor property there
    Object.defineProperty(MyKind.prototype, 'constructor', {
        get() {
            return MyKind
        }
    });
    return MyKind;
};

debugger;
var initial = { state: 1 };

debugger;
var Constructor_1 = Factory(initial);
var next1 = new Constructor_1(2);

debugger;
var Constructor_2 = Factory(next1);
var next2 = new Constructor_2(3);

debugger;