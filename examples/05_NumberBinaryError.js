
debugger;

const a = new Number(100);

debugger;

a[Symbol.toPrimitive] = () => {
	debugger;
	throw new Error('418: use subtract !');
};

try {
	debugger;
	console.log(a - 10);            // Error
} catch (error) {
	debugger;
	console.error(error);
}

// but how to deal with numbers then?
debugger;
a.subtract = function (b) {
	return this.valueOf() - b;
};

debugger;
console.log(a.subtract(10));    // 90

debugger;

// and, for example of eslint
const eslintrc = {
	rules: {
		'no-restricted-syntax': [
			'error',
			{
				selector: 'BinaryExpression[operator=\'-\']',
				message: 'syntax protocol error: +'
			},
			{
				selector: 'BinaryExpression[operator=\'>\']',
				message: 'syntax protocol error: >'
			}],
	}
}

debugger;