/*global describe, it */
'use strict';

var assert = require('assert');
var binCheck = require('../');
var path = require('path');

describe('binCheck()', function () {
    it('should test a binary and return true', function (cb) {
        var bin = path.join(__dirname, 'fixtures/optipng-linux');

        if (process.platform === 'darwin') {
            bin = path.join(__dirname, 'fixtures/optipng-osx');
        } else if (process.platform === 'win32') {
            bin = path.join(__dirname, 'fixtures/optipng-win32.exe');
        }

        binCheck(bin, function (err, works) {
            cb(assert(works));
        });
    });
});
