/**
 * Analytics.js
 *
 * (C) 2013-2016 Segment.io Inc.
 */

var Analytics = require('./analytics');
var createIntegration = require('@lattebank/analytics.js-integration');

// Create a new `analytics` singleton.
var analytics = new Analytics();

analytics.VERSION = '3.4.1';

analytics.createIntegration = createIntegration;

/*
 * Exports.
 */

module.exports = analytics;
