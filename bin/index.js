

var cp = require('child_process');
var path = require('path');


/**
 * @namespace
 */
var x = {};


/**
 * @typedef {!function(*)}
 */
x.Handler;


/**
 * @param {string} input
 * @return {string}
 */
x.__cmd = function(input) {
  return ['python',
    path.normalize(__dirname + '/../externs-extractor/externsExtractor.py'),
    input
  ].join(' ');
};


/**
 * @param {string} input
 * @param {!x.Handler} complete Success Handler
 * @param {!x.Handler} cancel Error handler
 */
x.exec = function(input, complete, cancel) {
  if (typeof input === 'string' && input !== '') {
    cp.exec(x.__cmd(input), function (error, stdout, stderr) {
      if (error == null) {
        complete(stdout);
      } else {
        cancel(error)
      }
    });
  } else {
    cancel('Externs-Extractor: Invalid input.');
  }
};


module.exports = x;
