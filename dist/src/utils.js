"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractDelimiter = void 0;
const extractDelimiter = (input) => {
    const delimiterEndIndex = input.indexOf('\n');
    const delimiter = input.substring(2, delimiterEndIndex);
    const numbers = input.substring(delimiterEndIndex + 1);
    return [delimiter, numbers];
};
exports.extractDelimiter = extractDelimiter;
