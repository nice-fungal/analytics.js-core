/* eslint-env node */
'use strict';

var baseConfig = require('./karma.conf');

var customLaunchers = {
  sl_chrome_latest: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'linux',
    version: 'latest'
  },
  sl_chrome_latest_1: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'linux',
    version: 'latest-1'
  },
  sl_firefox_latest: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'linux',
    version: 'latest'
  },
  sl_firefox_latest_1: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'linux',
    version: 'latest-1'
  },
  sl_safari_9: {
    base: 'SauceLabs',
    browserName: 'safari',
    version: '9.0'
  },
  sl_ie_9: {
    base: 'SauceLabs',
    browserName: 'internet explorer',
    version: '9'
  },
  sl_ie_10: {
    base: 'SauceLabs',
    browserName: 'internet explorer',
    version: '10'
  },
  sl_ie_11: {
    base: 'SauceLabs',
    browserName: 'internet explorer',
    version: '11'
  },
  sl_edge_latest: {
    base: 'SauceLabs',
    browserName: 'microsoftedge'
  }
};

module.exports = function(config) {
  baseConfig(config);

  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    throw new Error('SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are required but are missing');
  }

  config.set({
    browserDisconnectTolerance: 1,

    browserDisconnectTimeout: 60000,

    browserNoActivityTimeout: 60000,

    singleRun: true,

    concurrency: 3,

    retryLimit: 3,

    reporters: ['progress', 'junit'],

    browsers: ['PhantomJS'].concat(Object.keys(customLaunchers)),

    customLaunchers: customLaunchers,

    junitReporter: {
      outputDir: process.env.TEST_REPORTS_DIR,
      suite: require('./package.json').name
    },

    sauceLabs: {
      testName: require('./package.json').name
    }

    // Edge and Safari 9 still panic with coverage. Keeping disabled.
    // coverageReporter: {
    //   reporters: [
    //     { type: 'lcov' }
    //   ]
    // }
  });
};
