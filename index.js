/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

import {isPlainObject} from 'is-plain-object';

export default function isExtendable(val) {
  return isPlainObject(val) || typeof val === 'function' || Array.isArray(val);
};
