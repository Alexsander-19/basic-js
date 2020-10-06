const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const separator = options.hasOwnProperty('separator') ? String(options.separator) : '+';
  const additionSeparator = options.hasOwnProperty('additionSeparator') ? String(options.additionSeparator) : '';
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  const additionCount = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const repeatStr = options.repeatTimes ? options.repeatTimes : 1;
  const result = [];
  let count = 0;
  const getAdditionStr = (additionCount) => {
    const addCount = additionCount;
    let c = 0;
    let result = '';
    while (c < addCount) {
      if (c === addCount - 1) {
        result += `${addition}`;
        c += 1;
        break;
      }
      result += `${addition}${additionSeparator}`;
      c += 1;
    }
    return result;
  }
  while (count < repeatStr) {
    if (count === repeatStr - 1) {
        result.push(`${str}${getAdditionStr(additionCount)}`);
        count += 1;
        break;
    }
    if (addition) {
      result.push(`${str}${getAdditionStr(additionCount)}${separator}`);
      count += 1;
      continue;
    }
    result.push(`${str}${separator}`);
    count += 1;
  }
  return result.join('');
};
  