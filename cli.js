#!/usr/bin/env node
'use strict';
// Reference: https://github.com/sindresorhus/superb/blob/master/cli.js -- http://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm#notes :
var generateName = require('./index.js');
var sillyName = generateName();

console.log(sillyName);
var foo='bar';