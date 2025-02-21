"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNumbers = exports.extractDelimiter = void 0;
const extractDelimiter = (input) => {
    const delimiterEndIndex = input.indexOf('\n');
    const delimiter = input.substring(2, delimiterEndIndex);
    const numbers = input.substring(delimiterEndIndex + 1);
    return [delimiter, numbers];
};
exports.extractDelimiter = extractDelimiter;
const validateNumbers = (numArray) => {
    if (numArray.some(isNaN)) {
        throw new Error('Input contains invalid numbers');
    }
    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }
};
exports.validateNumbers = validateNumbers;
