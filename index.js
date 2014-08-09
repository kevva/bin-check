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

    executable(bin, function (err, w) {
        if (err) {
            return cb(err);
        }

        if (w) {
            spawn(bin, cmd)
                .on('error', function (err) {
                    return cb(err);
                })
                .on('exit', function (code) {
                    return cb(null, code === 0 ? true : false);
                });
        } else {
            return cb(null, false);
        }
    });
};
