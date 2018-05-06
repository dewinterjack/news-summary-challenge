// Assertions, any basic testing I would need. Unit, behavioural, feature.

function describe(string, callback) {
	console.log("\n" + string + ":\n\n");
	callback();
}

function it(string, callback) {
	console.log("it " + string + ":");
	callback();
}

function expects(x) {
	return {
		toEqual: function(y) {
			if (x === y) {
				console.log('%c Passed!', 'color: green'); //changed from console.log to return. We will console log at smileyIt.js
			}
			else {
				console.log('%c Failed', 'color: red');
			}
		},

		toBeLength: function(length) {
			if (x.length === length) {
				return 'Test Passed!';
			}
			else {
				return'Failed';
			}
		}

	};
}