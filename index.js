'use strict';
const execa = require('execa');
const executable = require('executable');

module.exports = (bin, args) => {
	if (!Array.isArray(args)) {
		args = ['--help'];
	}

	return executable(bin).then(works => {
		if (!works) {
			return Promise.reject(new Error(`Couldn't execute the \`${bin}\` binary. Make sure it has the right permissions.`));
		}

		return new Promise((resolve, reject) => {
			const cp = execa.spawn(bin, args);
			cp.on('error', reject);
			cp.on('exit', code => resolve(code === 0));
		});
	});
};
