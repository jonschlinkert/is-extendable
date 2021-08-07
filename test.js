/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

import 'mocha';
import assert from 'node:assert';
import isExtendable from './index.js';

describe('isExtendable', function() {
  it('should return true when a value is an object:', function() {
    assert(isExtendable({}));
    assert(isExtendable([]));
    assert(isExtendable(function() {}));
  });

  it('should return false when a value is not an object:', function() {
    assert(!isExtendable(new RegExp('foo')));
    assert(!isExtendable(/foo/));
    assert(!isExtendable(new Date()));
    assert(!isExtendable(new Error()));
    assert(!isExtendable('a'));
    assert(!isExtendable(5));
    assert(!isExtendable(null));
    assert(!isExtendable());
    assert(!isExtendable(undefined));
    assert(!isExtendable(true));
    assert(!isExtendable(false));
  });
});
