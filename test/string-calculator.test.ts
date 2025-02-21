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

}); 