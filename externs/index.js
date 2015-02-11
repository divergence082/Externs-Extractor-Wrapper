

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
 * @param {!x.Handler} complete Success Handler
 * @param {!x.Handler} cancel Error handler
 */
x.exec = function(input, complete, cancel) {};
