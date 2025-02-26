import { add } from '../src/string-calculator';

describe('String Calculator Tests', () => {
  it('should return 0 for an empty string', () => {
    expect(add('')).toEqual(0);
  });

  it('should return the number itself for a single number', () => {
    expect(add('1')).toEqual(1);
  });

  it('should return the sum of two numbers separated by a comma', () => {
    expect(add('1,5')).toEqual(6);
  });

  it('should throw an error for input containing invalid numbers', () => {
    expect(() => add('1,a')).toThrow('Input contains invalid numbers');
  });

  it('should handle new lines between numbers', () => {
    expect(add('1\n2,3')).toEqual(6);
  });

  it('should handle custom delimiters', () => {
    expect(add('//;\n1;2')).toEqual(3);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => add('1,-2,3,-4')).toThrow(
      'Negative numbers not allowed: -2, -4',
    );
  });
});
