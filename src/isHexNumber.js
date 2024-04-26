// @ts-check

import isString from '@chriscodesthings/is-string';

/**
 * Test if a string is a hex number
 * @param {string} str String to test
 * @param {boolean} [float=false] Allow floating point hex numbers
 * @param {boolean} [prefix0x=false] Allow the 0x prefix, if present
 * @returns {boolean}
 */
export default function isHexNumber(str, float = false, prefix0x = false) {
    const rxWhole = /^[0-9a-f]+$/i;
    const rxWholePrefix = /^(0x)?[0-9a-f]+$/i;
    const rxFloat = /^[0-9a-f]+(\.[a-z0-9]+)?$/i;
    const rxFloatPrefix = /^(0x)?[0-9a-f]+(\.[a-z0-9]+)?$/i;

    const rx = !float ?
        (!prefix0x ? rxWhole : rxWholePrefix) :
        (!prefix0x ? rxFloat : rxFloatPrefix);

    return isString(str) && !!str.match(rx);
}
