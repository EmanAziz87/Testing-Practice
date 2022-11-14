function analyzeArray(arrayNums) {
  let sum = 0;
  let minNum = arrayNums[0];
  let maxNum = 0;

  arrayNums.forEach((number) => {
    sum += number;

    if (minNum > number) {
      minNum = number;
    }

    if (maxNum < number) {
      maxNum = number;
    }
  });

  const avg = sum / arrayNums.length;

  const object = {
    average: avg,
    min: minNum,
    max: maxNum,
    length: arrayNums.length,
  };

  return object;
}

export default analyzeArray;
