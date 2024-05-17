/**
 * filterNonASCII - Filters non-ASCII characters from a string using RegExp.
 *
 * @param  {string} inputString The input string to filter.
 * @return {string}             The filtered string.
 */
function filterNonASCII(inputString) {
    return inputString.replace(/[^\x00-\x7F]/g, "");
}

module.exports = filterNonASCII;
