# bin-check [![Build Status](http://img.shields.io/travis/kevva/bin-check.svg?style=flat)](https://travis-ci.org/kevva/bin-check)

> Check if a binary is working by checking its exit code

## Install

```sh
$ npm install --save bin-check
```

## Usage

```js
var binCheck = require('bin-check');

binCheck('/bin/sh', ['--version'], function (err, works) {
	if (err) {
		throw err;
	}

	console.log(works);
	// => true
});
```

## API

### binCheck(bin, cmd, cb)

#### bin

Type: `String`

Path to the binary.

#### cmd

Type: `Array`  
Default: `['--help']`

Commands to run the binary with.

#### cb(err, works)

Type: `Function`

`works` is a `Boolean` which returns `true` if the binary is working correctly.

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
