## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Char codes utility belt - char code, char name and the char (character)

## Install
```
npm i --save char-codes
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var charCodes = require('char-codes');

charCodes('*quote');
//=> { doublequote: { code: 34, char: '"' },
// 'double-quote': { code: 34, char: '"' },
// 'double quote': { code: 34, char: '"' },
// singlequote: { code: 39, char: '\'' },
// 'single-quote': { code: 39, char: '\'' },
// 'single quote': { code: 39, char: '\'' }
// }

charCodes('34');
//=> { doublequote: { code: 34, char: '"' },
// 'double-quote': { code: 34, char: '"' },
// 'double quote': { code: 34, char: '"' },
// }

charCodes();
//=> { space: { code: 32, char: ' ' },
// negate: { code: 33, char: '!' },
// exclam: { code: 33, char: '!' },
// exclamation: { code: 33, char: '!' },
// 'exclamation mark': { code: 33, char: '!' },
// 'exclam mark': { code: 33, char: '!' },
// double: { code: 34, char: '"' },
// doublequote: { code: 34, char: '"' },
// 'double-quote': { code: 34, char: '"' },
// 'double quote': { code: 34, char: '"' },
// hash: { code: 35, char: '#' },
// number: { code: 35, char: '#' },
// 'hash sign': { code: 35, char: '#' },
// 'number sign': { code: 35, char: '#' },
// dollar: { code: 36, char: '$' },
// 'dollar sign': { code: 36, char: '$' },
// percent: { code: 37, char: '%' },
// percentage: { code: 37, char: '%' },
// ampersand: { code: 38, char: '&' },
// single: { code: 39, char: '\'' },
// singlequote: { code: 39, char: '\'' },
// 'single-quote': { code: 39, char: '\'' },
// 'single quote': { code: 39, char: '\'' },
// 'left-parenthesis': { code: 40, char: '(' },
// ...
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/char-codes
[npmjs-img]: https://img.shields.io/npm/v/char-codes.svg?style=flat&label=char-codes

[coveralls-url]: https://coveralls.io/r/tunnckoCore/char-codes?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/char-codes.svg?style=flat

[license-url]: https://github.com/tunnckoCore/char-codes/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/char-codes
[travis-img]: https://img.shields.io/travis/tunnckoCore/char-codes.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/char-codes
[daviddm-img]: https://img.shields.io/david/tunnckoCore/char-codes.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/char-codes/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), March 17, 2015_