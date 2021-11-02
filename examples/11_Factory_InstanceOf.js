function Factory(previous) {
    function MyKind(state) {
        this.state = state;
    };
    MyKind.prototype = previous;
    // let's keep constructor property there
    Object.defineProperty(MyKind.prototype, 'constructor', {
        get() {
            return MyKind
        }
    });
    return MyKind;
};

var initial = { state: 1 };

var Constructor_1 = Factory(initial);
var next1 = new Constructor_1(2);

var Constructor_2 = Factory(next1);
var next2 = new Constructor_2(3);

debugger;
console.log(next1 instanceof Constructor_1); // true

debugger;
console.log(next1 instanceof Constructor_2); // false


debugger;
console.log(next2 instanceof Constructor_1); // true

debugger;
console.log(next2 instanceof Constructor_2); // true