/**
 * Analytics.js
 *
 * (C) 2013-2016 Segment.io Inc.
 */

var Analytics = require('./analytics');

// Create a new `analytics` singleton.
var analytics = new Analytics();

analytics.VERSION = '3.0.0';

/*
 * Exports.
 */

module.exports = analytics;
