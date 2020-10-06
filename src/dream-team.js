const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return false;
  }
  const iter = (acc, i) => {
    const [first, ...second] = i;
    if (second.length === 0) {
      if (typeof first === 'string') {
        const symbol = first.trim()[0].toUpperCase();
        return [...acc, symbol];
      }
      return acc;
    }
    if (typeof first === 'string') {
      const newAcc = [...acc, first.trim()[0].toUpperCase()];
      return iter(newAcc, second);
    }
    return iter(acc, second);
  }
  const result = iter([], arr).sort().join('');
  return result;
};
