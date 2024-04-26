# is-hex-number <br> [![Test workflow status](https://github.com/ChrisCodesThings/is-hex-number/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/is-hex-number)](https://www.npmjs.com/package/@chriscodesthings/is-hex-number) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Function to determine if a string is a hexadecimal number**

## Description

Tests a variable to see if it's a hex number.

### See...
- [Install/Usage](#install "Install and Usage")
- [Syntax](#syntax "Syntax")
- [Examples](#examples "Examples")
- [See Also](#see-also "See Also")

---

## Install

```sh
npm install --save @chriscodesthings/is-hex-number
```

## Use

```js
import isHexNumber from '@chriscodesthings/is-hex-number';

console.log(isHexNumber("c0ffee"));
// => true
```

## Syntax

```js
isHexNumber(str, float, prefix0x);
```

### Parameters

- *str*: a string to test
- *float* (optional): if `true`, allow a floating point hex number
- *prefix0x* (optional): if `true`, allow the 0x prefix

### Return Value

Returns boolean `true` if *str* is a valid hex number, `false` otherwise.

## Examples

```js
// convert to decimal or return null if invalid
function hex2dec(hex) {
    if( isHexNumber(hex)) {
        return parseInt(hex,16);
    }

    return null;
}
```

## See Also...

- [**is-number**: Function to determine if something is a number type](https://github.com/ChrisCodesThings/is-number "Function to determine if something is a number type")
- [**is-string**: Determine if something is a string type](https://github.com/ChrisCodesThings/is-string "Determine if something is a string type")
- [**is-css-hex-color**: Determine if a string is a hex color code](https://github.com/ChrisCodesThings/is-css-hex-color "Determine if a string is a hex color code")