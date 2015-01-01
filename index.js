'use strict';

var executable = require('executable');
var spawn = require('child_process').spawn;

/**
 * Check if a executable is working correctly by checking it's exit code
 *
 * @param {String} bin
 * @param {Array} cmd
 * @param {Function} cb
 * @api public
 */

module.exports = function (bin, cmd, cb) {
	if (typeof cmd === 'function') {
		cb = cmd;
		cmd = ['--help'];
	}

	executable(bin, function (err, works) {
		if (err) {
			cb(err);
			return;
		}

		if (!works) {
			cb(new Error('Couldn\'t execute the `' + bin + '` binary. Make sure it has the right permissions.'));
			return;
		}

		var cp = spawn(bin, cmd);

		cp.on('error', cb);
		cp.on('exit', function (code) {
			cb(null, code === 0 ? true : false);
			return;
		});
	});
};
