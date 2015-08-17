# Externs-Extractor-Wrapper
 
Javascript wrapper for Externs-Exractor written in Python.
  
  
Externs-Extractor - utility for interface parsing, using for easy compilation and code checking with means of Closure Compiler. Was originally written for Livetex-Tools.

## Usage:

```javascript

var x = require('externs-extractor-wrapper');

x.exec('bin/index.js', function(externs) {
  console.log('Externs: ' + externs);
}, console.error);

```

This code takes file `bin/index.js` and generates externs   

Other libraries using `bin/index.js` can be compiled by Closure Compiler with option `--externs externs/index.js` 



... Possibly will be rewritten in Javascript ...
