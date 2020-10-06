const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  if (arr.length === 0) {
    return [];
  }
  const controlSequences = ['--discard-next', '--discard-prev' , '--double-next', '--double-prev'];
  const newArr = [...arr];
  const result = [];
  let count = 0;
  while (count <= newArr.length - 1) {
    if (newArr[count] === '--double-next') {
      if (newArr[count + 1] === undefined) {
        count += 1;
        continue;
      }
      result.push(newArr[count + 1]);
      count += 1;
      continue;
    }
    if (newArr[count] === '--double-prev') {
      if (result.length === 0) {
        count += 1;
        continue;
      }
      if (newArr[count - 2] === '--discard-next') {
        count += 1;
        continue;
      }
      result.push(newArr[count - 1]);
      count += 1;
      continue;
    }
    if (newArr[count] === '--discard-next') {
      if (newArr[count + 1] === undefined) {
        count += 1;
        continue;
      }
      count += 2;
      continue;
    }
    if (newArr[count] === '--discard-prev') {
      if (result.length === 0) {
        count += 1;
        continue;
      }
      if (newArr[count - 2] === '--discard-next') {
        count += 1;
        continue;
      }
      result.pop();
      count += 1;
      continue;
    }
    result.push(newArr[count]);
    count += 1;
  }
  // while (count <= newArr.length - 1) {
  //   if (controlSequences.includes((newArr[count]))) {
  //     if (newArr[count] === '--discard-next') {
  //       if (newArr[count + 1] === undefined) {
  //         count += 1;
  //         continue;
  //       }
  //       count += 2;
  //       continue;
  //     }
  //     if (newArr[count] === '--discard-prev') {
  //       if (newArr[count - 1] === undefined) {
  //         count += 1;
  //         continue;
  //       }
  //       if (result[result.length - 1] === newArr[count - 1]) {
  //         result.pop();
  //         count += 1;
  //         continue;
  //       }
  //       count += 1;
  //       continue;
  //     }
  //     if (newArr[count] === '--double-next') {
  //       if (newArr[count + 1] === undefined) {
  //         count += 1;
  //         continue;
  //       }
  //       result.push(newArr[count + 1]);
  //       count += 1;
  //       continue;
  //     }
  //     if (newArr[count] === '--double-prev') {
  //       if (newArr[count - 1] === undefined) {
  //         count += 1;
  //         continue;
  //       }
  //       if (newArr[count - 2] === '--discard-next') {
  //
  //         count += 1;
  //         continue;
  //       }
  //       count += 1;
  //       continue;
  //     }
  //   }
  //
  //   result.push(newArr[count]);
  //   count += 1;
  // }
  return  result;
};
