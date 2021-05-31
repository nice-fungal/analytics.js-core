'use strict';

import { SegmentAnalytics } from './index.d';

/**
 * Analytics.js
 *
 * (C) 2013-2016 Segment.io Inc.
 */

var Analytics = require('./analytics');

// Create a new `analytics` singleton.
var analytics: SegmentAnalytics.AnalyticsJS = new Analytics();

// Expose `require`.
// TODO(ndhoule): Look into deprecating, we no longer need to expose it in tests
analytics.require = require;

// Expose package version.
analytics.VERSION = '4.1.5';

/*
 * Exports.
 */

module.exports = analytics;
