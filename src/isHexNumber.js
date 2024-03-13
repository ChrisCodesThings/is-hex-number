import isString from '@chriscodesthings/is-string';

export default function (str, float = false) {
    if (!float) {
        return isString(str) && !!str.match(/^[0-9a-f]+$/i);
    }

    return isString(str) && !!str.match(/^[0-9a-z]+\.?[0-9a-z]*$/i);
}
