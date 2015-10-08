# bin-check [![Build Status](https://travis-ci.org/kevva/bin-check.svg?branch=master)](https://travis-ci.org/kevva/bin-check)

> Check if a binary is working by checking its exit code


## Install

```
$ npm install --save bin-check
```


## Usage

```js
const binCheck = require('bin-check');

binCheck('/bin/sh', ['--version']).then(works => {
	console.log(works);
	//=> true
});
```


## API

### binCheck(binary, [command])

Returns a promise that resolves to a `boolean`.

#### binary

*Required*  
Type: `string`

Path to the binary.

#### command

Type: `array`  
Default: `['--help']`

Commands to run the binary with.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
