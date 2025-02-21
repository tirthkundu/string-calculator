export const add = (numbers:string):number => {
    if (numbers === '') {
      return 0;
    }

    let delimiter = ',';
  
    const numArray = numbers.split(delimiter);
  
    return numArray.map(Number).reduce((sum, num) => sum + num, 0);
  };