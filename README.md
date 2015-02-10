# Externs-Extractor-Wrapper
 
Javascript wrapper for Externs-Exractor written in Python.
  
  
Externs-Extractor - utility for interface parsing, using for easy compilation and code checking with means of Closure Compiler. Was originally written for Livetex-Tools.

## Usage:

```javascript

var x = require('externs-extractor-wrapper');

var options = {
  input: 'bin/index.js',
  output: 'externs/index.js'
}

x.exec(options, function() {
  console.log('Externs are ready!');
}, console.error);

```

This code takes file `bin/index.js` and generates externs into file `externs/index.js`   

Other libraries using `bin/index.js` can be compiled by Closure Compiler with option `--externs externs/index.js` 



... Possibly will be rewritten in Javascript ...
