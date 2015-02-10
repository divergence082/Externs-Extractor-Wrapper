

var cp = require('child_process');
var path = require('path');


/**
 * @namespace
 */
var x = {};


/**
 * @param {string} input Path to file for which externs are needed
 * @param {string} output Path to externs file.
 */
x.exec = function(input, output) {
  var extractor = path.normalize(__dirname +
      '/../externs-extractor/externsExtractor.py');
  var option = '--output ' + output;
  var cmd = ['python', extractor, option, input].join(' ');

  cp.exec(cmd, function (error, stdout, stderr) {
    if (error !== null) {
      console.error(error);
    }
  });
};


module.exports = x;
