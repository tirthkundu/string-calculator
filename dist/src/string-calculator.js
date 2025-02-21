"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const add = (numbers) => {
    if (numbers === '') {
        return 0;
    }
    let delimiter = ',';
    const numArray = numbers.split(delimiter);
    return numArray.map(Number).reduce((sum, num) => sum + num, 0);
};
exports.add = add;
