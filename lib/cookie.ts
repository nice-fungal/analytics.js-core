'use strict';

import { CookieOptions } from './types';
import cloneDeep from 'lodash/clonedeep'

/**
 * Module dependencies.
 */

var bindAll = require('bind-all');
var cookie = require('@head.js/analytics.js-cookie');
// var debug = require('debug')('analytics.js:cookie');
var topDomain = require('@head.js/analytics.js-top-domain');

const MAX_AGE_ONE_YEAR = 31536000000

/**
 * Initialize a new `Cookie` with `options`.
 *
 * @param {Object} options
 */

function Cookie(options?: CookieOptions) {
  this.options(options);
}

/**
 * Get or set the cookie options.
 */

Cookie.prototype.options = function(options?: CookieOptions) {
  if (arguments.length === 0) return this._options;

  options = options || {};

  let domain = '.' + topDomain(window.location.href);
  if (domain === '.') domain = null;

  const defaults: CookieOptions  = {
    maxage: MAX_AGE_ONE_YEAR,
    domain: domain,
    path: '/',
    sameSite: 'Lax'
  }

  this._options = {
    ...defaults,
    ...options
  };

  // http://curl.haxx.se/rfc/cookie_spec.html
  // https://publicsuffix.org/list/effective_tld_names.dat
  //
  // try setting a dummy cookie with the options
  // if the cookie isn't set, it probably means
  // that the domain is on the public suffix list
  // like myapp.herokuapp.com or localhost / ip.
  this.set('ajs:test', true);
  if (!this.get('ajs:test')) {
    // debug('fallback to domain=null');
    this._options.domain = null;
  }
  this.remove('ajs:test');
};

/**
 * Set a `key` and `value` in our cookie.
 */

Cookie.prototype.set = function(key: string, value?: object | string): boolean {
  try {
    value = window.JSON.stringify(value);
    cookie(key, value === 'null' ? null : value, cloneDeep(this._options));
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Get a value from our cookie by `key`.
 */

Cookie.prototype.get = function(key: string): object {
  try {
    var value = cookie(key);
    value = value ? window.JSON.parse(value) : null;
    return value;
  } catch (e) {
    return null;
  }
};

/**
 * Remove a value from our cookie by `key`.
 */

Cookie.prototype.remove = function(key: string): boolean {
  try {
    cookie(key, null, cloneDeep(this._options));
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Expose the cookie singleton.
 */

module.exports = bindAll(new Cookie());

/**
 * Expose the `Cookie` constructor.
 */

module.exports.Cookie = Cookie;
