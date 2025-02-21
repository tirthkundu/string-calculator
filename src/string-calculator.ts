export const add = (numbers: string): number => {
    if (numbers === '') {
      return 0;
    }
  
    let delimiter = ',';
  
    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      delimiter = numbers.substring(2, delimiterEndIndex);
      numbers = numbers.substring(delimiterEndIndex + 1);
    }
  
    const numArray = numbers.split(new RegExp(`[${delimiter}\n]`)).map(Number);
  
    if (numArray.some(isNaN)) {
      throw new Error('Input contains invalid numbers');
    }
  
    return numArray.reduce((sum, num) => sum + num, 0);
  };