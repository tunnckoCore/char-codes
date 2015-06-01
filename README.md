# char-codes [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Char codes utility belt - char code, char name and the char (character)

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coverage-img]][coverage-url] [![dependency status][david-img]][david-url]


## Install
```
npm i char-codes --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var charCodes = require('char-codes')

charCodes('*quote')
//=> { doublequote: { code: 34, char: '"' },
// 'double-quote': { code: 34, char: '"' },
// 'double quote': { code: 34, char: '"' },
// singlequote: { code: 39, char: '\'' },
// 'single-quote': { code: 39, char: '\'' },
// 'single quote': { code: 39, char: '\'' }
// }

charCodes('34')
//=> { doublequote: { code: 34, char: '"' },
// 'double-quote': { code: 34, char: '"' },
// 'double quote': { code: 34, char: '"' },
// }

charCodes()
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


## Related
- [char-code-names](https://github.com/tunnckoCore/char-code-names): Common used char codes and their common used names as json object
- [hex-color-regex](https://github.com/regexps/hex-color-regex): The best regular expression (regex) for matching hex color values from string.
- [is-hexcolor](https://github.com/tunnckocore/is-hexcolor): Check that given value is valid hex color, using `hex-color-regex` - the best regex for matching hex color values
- [is-ansi](https://github.com/tunnckocore/is-ansi): Check that given string contain ANSI color codes, without CLI
- [is-match](https://github.com/jonschlinkert/is-match): Create a matching function from a glob pattern, regex, string, array or function.
- [is-missing](https://github.com/tunnckoCore/is-missing): Check that given `name` or `user/repo` exists in npm registry or in github as user repository.
- [is-installed](https://github.com/tunnckoCore/is-installed): Checks that given package is installed on the system - globally or locally.
- [is-empty-function](https://github.com/tunnckoCore/is-empty-function): Checks the given function (or fn.toString()) is with empty body - dont have body.
- [is-kindof](https://github.com/tunnckoCore/is-kindof): Thin wrapper around `kind-of` and in bonus functional api.


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/char-codes/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/char-codes
[npmjs-img]: https://img.shields.io/npm/v/char-codes.svg?label=char-codes

[license-url]: https://github.com/tunnckoCore/char-codes/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/char-codes
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/char-codes.svg

[coverage-url]: https://codeclimate.com/github/tunnckoCore/char-codes
[coverage-img]: https://img.shields.io/codeclimate/coverage/github/tunnckoCore/char-codes.svg

[travis-url]: https://travis-ci.org/tunnckoCore/char-codes
[travis-img]: https://img.shields.io/travis/tunnckoCore/char-codes.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/char-codes
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/char-codes.svg

[david-url]: https://david-dm.org/tunnckoCore/char-codes
[david-img]: https://img.shields.io/david/tunnckoCore/char-codes.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
