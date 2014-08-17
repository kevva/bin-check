'use strict';

var binCheck = require('../');
var path = require('path');
var test = require('ava');

test('test a binary and return true', function (t) {
    t.plan(2);

    var bin = path.join(__dirname, 'fixtures/optipng-linux');

    if (process.platform === 'darwin') {
        bin = path.join(__dirname, 'fixtures/optipng-osx');
    } else if (process.platform === 'win32') {
        bin = path.join(__dirname, 'fixtures/optipng-win32.exe');
    }

    binCheck(bin, function (err, works) {
        t.assert(!err);
        t.assert(works);
    });
});
