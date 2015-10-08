'use strict';
var spawn = require('child_process').spawn;
var executable = require('executable');
var Promise = require('pinkie-promise');

module.exports = function (bin, cmd) {
	if (!Array.isArray(cmd)) {
		cmd = ['--help'];
	}

	return executable(bin).then(function (works) {
		if (!works) {
			return Promise.reject(new Error('Couldn\'t execute the `' + bin + '` binary. Make sure it has the right permissions.'));
		}

		return new Promise(function (resolve, reject) {
			var cp = spawn(bin, cmd);

			cp.on('error', reject);
			cp.on('exit', function (code) {
				resolve(code === 0);
			});
		});
	});
};
