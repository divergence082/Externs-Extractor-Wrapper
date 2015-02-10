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
 * @param {!x.Option} options
 * @param {!x.Handler} complete Success Handler
 * @param {!x.Handler} cancel Error handler
 */
x.exec = function(options, complete, cancel) {};


