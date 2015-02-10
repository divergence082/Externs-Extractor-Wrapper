

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
 * @typedef {{input: string=, output: string=}}
 */
x.Option;


/**
 * @param {string} input
 * @param {string} output
 * @return {string}
 */
x.__cmd = function(input, output) {
  return ['python',
    path.normalize(__dirname + '/../externs-extractor/externsExtractor.py'),
    '--output ' + output, input].join(' ');
};


/**
 * @param {!x.Option} options
 * @param {!x.Handler} complete Success Handler
 * @param {!x.Handler} cancel Error handler
 */
x.exec = function(options, complete, cancel) {
  if (typeof options === 'object' &&
      typeof options.input === 'string' && options.input !== '' &&
      typeof options.output === 'string' && options.output !== '') {
    cp.exec(x.__cmd(options.input, options.output),
        function (error, stdout, stderr) {
          if (error !== null) {
            cancel(error)
          } else {
            complete();
          }
        });
  } else {
    cancel(new Error('Wrong externs-extractor options'));
  }
};


module.exports = x;
