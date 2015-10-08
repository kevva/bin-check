import path from 'path';
import test from 'ava';
import fn from '../';

test('test a binary and return true', async t => {
	let bin = path.join(__dirname, 'fixtures/optipng-linux');

	if (process.platform === 'darwin') {
		bin = path.join(__dirname, 'fixtures/optipng-osx');
	} else if (process.platform === 'win32') {
		bin = path.join(__dirname, 'fixtures/optipng-win32.exe');
	}

	const works = await fn(bin);
	t.true(works);
});
