# is-hex-number &middot; [![Test workflow status](https://github.com/ChrisCodesThings/is-hex-number/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/is-hex-number)](https://www.npmjs.com/package/@chriscodesthings/is-hex-number) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Function to determine if a string is a hexadecimal number**

## Install

```sh
npm install --save @chriscodesthings/is-hex-number
```

## Use

```js
import isHexNumber from '@chriscodesthings/is-hex-number';

console.log(isHexNumber("c0ffee"));
// => true

console.log(isHexNumber("ace.cafe", true));
// => true
```

## Syntax

```js
isHexNumber(hex, float);
```

### Parameters

- *hex*: a string to test
- *float* (optional): if `true`, allow a floating point hex number

### Return Value

Returns boolean `true` if *hex* is a valid hex number, `false` otherwise.

## Description

Does what it says on the tin.