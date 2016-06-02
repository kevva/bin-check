import path from 'path';
import test from 'ava';
import fn from '../';

const bin = {
	darwin: path.join(__dirname, 'fixtures/optipng-osx'),
	linux: path.join(__dirname, 'fixtures/optipng-linux'),
	win32: path.join(__dirname, 'fixtures/optipng-win32.exe')
};

test(async t => {
	t.true(await fn(bin[process.platform]));
});
