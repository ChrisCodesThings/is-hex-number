// @ts-check

import isString from '@chriscodesthings/is-string';

/**
 * Test if a string is a hex number
 * @param {string} str String to test
 * @param {boolean} [float=false] Allow floating point hex numbers
 * @returns {boolean}
 */
export default function isHexNumber(str, float = false) {
    const rxWhole = /^[0-9a-f]+$/i;
    const rxFloat = /^[0-9a-f]+(\.[a-z0-9]+)?$/i;
    const rx = !float ? rxWhole : rxFloat;

    return isString(str) && !!str.match(rx);
}
