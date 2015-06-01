/*!
 * char-codes <https://github.com/tunnckoCore/char-codes>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var forIn = require('for-in')
var reduce = require('object.reduce')
var micromatch = require('micromatch')
var charCodeNames = require('char-code-names')

module.exports = function charCodes (filter) {
  var res = {}
  var codeNames = charCodeNames()
  forIn(codeNames, function _forIn (names, key) {
    key = parseInt(key) // eslint-disable-line radix
    names.forEach(function forEach (name) {
      res[name] = {code: key, char: String.fromCharCode(key)}
    })
  })

  if (!filter) {
    return res
  }

  var isMatch = micromatch.matcher(filter)
  return reduce(res, function (acc, val, key) {
    if (isMatch(val.code.toString()) || isMatch(val.char) || isMatch(key)) {
      acc[key] = val
    }
    return acc
  }, {})
}
