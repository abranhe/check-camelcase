/**
 * Check if a string is camelcase
 * 
 * @param {string} input - the input to be tested
 * @returns {boolean} wheather is camelcase or not
 * 
 * @example
 * ```
 * import checkCamelcase = require('check-camelcase');
 * 
 * checkCamelcase('hello world')
 * // => 'Hello World'
 * ```
  */
declare function checkCamelcase(input: string): boolean

export = checkCamelcase;