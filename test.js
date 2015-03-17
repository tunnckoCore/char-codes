/**
 * char-codes <https://github.com/tunnckoCore/char-codes>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var forIn = require('for-in');
var typeOf = require('kind-of');
var charCodes = require('./index');

describe('char-codes:', function() {
  it('should be object with length Object.keys(charCodes()).length', function(done) {
    var i = 0;
    var codes = charCodes();
    forIn(codes, function forIn(val) {
      assert.ok(val);
      i++;
    })
    assert.strictEqual(i, Object.keys(codes).length)
    done();
  });
  it('should each value of object have `char` and `code` properties', function(done) {
    forIn(charCodes(), function forIn(val) {
      assert.ok(val.char);
      assert.ok(val.code);
    })
    done();
  });
  it('should `char` property be string and `code` be number', function(done) {
    forIn(charCodes(), function forIn(val) {
      assert.strictEqual(typeOf(val.char), 'string');
      assert.strictEqual(typeOf(val.code), 'number');
    })
    done();
  });
  it('should allow object filtering with glob patterns', function(done) {
    var actual = charCodes('_');
    assert.deepEqual(actual.lodash, {code: 95, char: '_'});
    assert.deepEqual(actual.underscore, {code: 95, char: '_'});
    assert.deepEqual(actual.horizontal, {code: 95, char: '_'});

    var actual = charCodes('95');
    assert.deepEqual(actual.lodash, {code: 95, char: '_'});
    assert.deepEqual(actual.underscore, {code: 95, char: '_'});
    assert.deepEqual(actual.horizontal, {code: 95, char: '_'});

    var actual = charCodes('.');
    var expected = {
      dot: {code: 46, char: '.'},
      period: {code: 46, char: '.'}
    }

    assert.deepEqual(actual, expected);

    var actual = charCodes('46');
    var expected = {
      dot: {code: 46, char: '.'},
      period: {code: 46, char: '.'}
    }

    assert.deepEqual(actual, expected);
    done();
  });
  it('should return empty object if filter given and no match found', function(done) {
    var actual = charCodes('*999*');
    var expected = {};

    assert.deepEqual(actual, expected);
    done();
  });
});
