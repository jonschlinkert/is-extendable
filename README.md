# is-extendable [![NPM version](https://badge.fury.io/js/is-extendable.svg)](http://badge.fury.io/js/is-extendable)

> Returns true if a value is any of the object types: array, regexp, plain object, function or date. This is useful for determining if a value can be extended, e.g. "can the value have keys?"

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i is-extendable --save
```

## Usage

```js
var isExtendable = require('is-extendable');
```

Returns true if the value is any of the following:

* `array`
* `regexp`
* `plain object`
* `function`
* `date`
* `error`

## Notes

All objects in JavaScript can have keys, but it's a pain to check for this, since we ether need to verify that the value is not `null` or `undefined` and:

* the value is not a primitive, or
* that the object is an `object`, `function`

Also note that an `extendable` object is not the same as an [extensible object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible), which is one that (in es6) is not sealed, frozen, or marked as non-extensible using `preventExtensions`.

## Related projects

* [isobject](https://github.com/jonschlinkert/isobject): Returns true if the value is an object and not an array or null.
* [is-plain-object](https://github.com/jonschlinkert/is-plain-object): Returns true if an object was created by the `Object` constructor.
* [is-equal-shallow](https://github.com/jonschlinkert/is-equal-shallow): Does a shallow comparison of two objects, returning false if the keys or values differ.

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/is-extendable/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on June 28, 2015._