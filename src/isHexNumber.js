import isString from '@chriscodesthings/is-string';

export default function (str) {
    return isString(str) && !!str.match(/^[0-9a-f]+$/i);
}
