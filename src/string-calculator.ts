import { extractDelimiter, validateNumbers } from './utils';

export const add = (numbers: string): number => {
  if (!numbers) return 0;

  let delimiter = ',';
  if (numbers.startsWith('//')) {
    [delimiter, numbers] = extractDelimiter(numbers);
  }

  const numArray = numbers.split(new RegExp(`[${delimiter}\n]`)).map(Number);

  validateNumbers(numArray);

  return numArray.reduce((sum, num) => sum + num, 0);
};
