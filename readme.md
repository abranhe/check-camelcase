<p>
	<br>
	<a href="https://www.npmjs.com/package/check-camelcase"><b>🐫 check-camelcase</b></a>
	: Check if an string is <a href="https://en.wikipedia.org/wiki/Camel_case">camelcase</a>
	<br>
</p>

<p>
	<a href="https://travis-ci.org/abranhe/check-camelcase"><img src="https://img.shields.io/travis/abranhe/check-camelcase.svg?logo=travis" /></a>
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abranhe.com/badges/cash-me.svg"></a>
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abranhe.com/badges/patreon.svg" /></a>
	<a href="https://github.com/abranhe/check-camelcase/blob/master/license"><img src="https://img.shields.io/github/license/abranhe/check-camelcase.svg" /></a>
</p>

If you need to check if an string is camelCase you are in the right place.

## Install

```
$ npm install check-camelcase
```

## Usage

```js
const checkCamelcase = require('check-camelcase');

console.log(checkCamelcase('camelCase'));
// => true

console.log(checkCamelcase('snake_case'));
// => false

console.log(checkCamelcase('Pascalcase'));
// => true

console.log(checkCamelcase('Darwin_case'));
// => true

console.log(checkCamelcase('string'));
// => false
```

## API

#### checkCamelcase(string)

Check if an string is camelCase

Type: `boolean`

**string**

Type: `string`

## Related

- [tocamelcase](https://github.com/abranhe/tocamelcase): Convert to camelcase (Python).
- [decamelize](https://github.com/abranhe/decamelize): Convert to snake case (Python).

## Team

|[![Carlos Abraham](https://avatars3.githubusercontent.com/u/21347264?s=50)](https://abranhe.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

## License

[MIT](https://github.com/abranhe/check-camelcase/blob/master/license) License © [Carlos Abraham](https://github.com/abranhe/)