'use strict';

debugger;

const MAX_NUM = 1000;

global.m = [];

global.start = Date.now();

global.current = {
	name: 'root'
};

const review = () => {
	console.log('finished', global.m.length, (Date.now() - global.start) / 1000);
	debugger;
};

const makeNextEl = function (pointer) {
	const name = `idx_${ global.m.length }`;
	const el = {
		get [name] () {
			return el;
		},
		name,
		parent: pointer,
		get self () {
			return el;
		}
	};
	Object.setPrototypeOf(el, pointer);
	global.current = el;
	global.m.push(el);
	if (global.m.length < MAX_NUM) {
		console.log(global.m.length, name, (Date.now() - global.start) / 1000);
		process.nextTick(() => {
			makeNextEl(el);
		}, 0);
		return;
	}
	review();
};

makeNextEl(global.current);

debugger;