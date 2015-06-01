/*!
 * char-codes <https://github.com/tunnckoCore/char-codes>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var forIn = require('for-in')
var typeOf = require('kind-of')
var charCodes = require('./index')

test('char-codes:', function () {
  test('should be object with length Object.keys(charCodes()).length', function (done) {
    var i = 0
    var codes = charCodes()
    forIn(codes, function _forIn (val) {
      test.ok(val)
      i++
    })
    test.equal(i, Object.keys(codes).length)
    done()
  })
  test('should each value of object have `char` and `code` properties', function (done) {
    forIn(charCodes(), function _forIn (val) {
      test.ok(val.char)
      test.ok(val.code)
    })
    done()
  })
  test('should `char` property be string and `code` be number', function (done) {
    forIn(charCodes(), function _forIn (val) {
      test.equal(typeOf(val.char), 'string')
      test.equal(typeOf(val.code), 'number')
    })
    done()
  })
  test('should allow object filtering with glob patterns', function (done) {
    var actual = charCodes('_')
    test.deepEqual(actual.lodash, {code: 95, char: '_'})
    test.deepEqual(actual.underscore, {code: 95, char: '_'})
    test.deepEqual(actual.horizontal, {code: 95, char: '_'})

    actual = charCodes('95')
    test.deepEqual(actual.lodash, {code: 95, char: '_'})
    test.deepEqual(actual.underscore, {code: 95, char: '_'})
    test.deepEqual(actual.horizontal, {code: 95, char: '_'})

    actual = charCodes('.')
    var expected = {
      dot: {code: 46, char: '.'},
      period: {code: 46, char: '.'}
    }

    test.deepEqual(actual, expected)

    actual = charCodes('46')
    expected = {
      dot: {code: 46, char: '.'},
      period: {code: 46, char: '.'}
    }

    test.deepEqual(actual, expected)
    done()
  })
  test('should return empty object if filter given and no match found', function (done) {
    var actual = charCodes('*999*')
    var expected = {}

    test.deepEqual(actual, expected)
    done()
  })
})
