import path from 'path';
import test from 'ava';
import m from '.';

const bin = {
	darwin: path.join(__dirname, 'fixtures/optipng-osx'),
	linux: path.join(__dirname, 'fixtures/optipng-linux'),
	win32: path.join(__dirname, 'fixtures/optipng-win32.exe')
};

test('async', async t => {
	t.true(await m(bin[process.platform]));
	await t.throws(m(__filename), `Couldn't execute the \`${__filename}\` binary. Make sure it has the right permissions.`);
});

test('sync', t => {
	t.true(m.sync(bin[process.platform]));
	t.throws(m.sync.bind(null, __filename), `Couldn't execute the \`${__filename}\` binary. Make sure it has the right permissions.`);
});
