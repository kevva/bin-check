'use strict';

var path = require('path');
var test = require('ava');
var binCheck = require('../');

test('test a binary and return true', function (t) {
	t.plan(2);

	var bin = path.join(__dirname, 'fixtures/optipng-linux');

	if (process.platform === 'darwin') {
		bin = path.join(__dirname, 'fixtures/optipng-osx');
	} else if (process.platform === 'win32') {
		bin = path.join(__dirname, 'fixtures/optipng-win32.exe');
	}

	binCheck(bin, function (err, works) {
		t.assert(!err, err);
		t.assert(works, works);
	});
});

test('test a binary and return true using sync', function (t) {
	var bin = path.join(__dirname, 'fixtures/optipng-osx');

	if (process.platform === 'darwin') {
		bin = path.join(__dirname, 'fixtures/optipng-osx');
	} else if (process.platform === 'win32') {
		bin = path.join(__dirname, 'fixtures/optipng-win32.exe');
	}

	t.assert(binCheck.sync(bin));
	t.end();
});
