#!/usr/bin/env node
'use strict';
// Attempting this via this reference: https://github.com/sindresorhus/superb/blob/master/cli.js
var generateName = require('./index.js');
var sillyName = generateName();

console.log(sillyName);
var foo='bar';