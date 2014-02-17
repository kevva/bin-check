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
        }

        binCheck(bin, function (err, works) {
            cb(assert(works));
        });
    });
});
