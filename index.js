'use strict';
const execa = require('execa');
const executable = require('executable');

module.exports = (bin, args) => {
	if (!Array.isArray(args)) {
		args = ['--help'];
	}

	return executable(bin)
		.then(works => {
			if (!works) {
				throw new Error(`Couldn't execute the \`${bin}\` binary. Make sure it has the right permissions.`);
			}

			return execa(bin, args);
		})
		.then(res => res.code === 0);
};
