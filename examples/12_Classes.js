function Factory(previous) {
	class MyKind {
		constructor ({state}) {
			this.state = state;
		}
	};
	debugger; // see prototype.constructor

	Object.setPrototypeOf(MyKind.prototype, previous);

	return MyKind;
};

debugger;
var initial = { state: 1 };

debugger;
var Constructor_1 = Factory(initial);
var next1 = new Constructor_1({ state: 2 });

debugger;
var Constructor_2 = Factory(next1);
var next2 = new Constructor_2({ state: 3 });

debugger;