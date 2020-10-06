const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  return arr.reduce((acc, i) => {
    if (Array.isArray(i)) {
      const cats = i.reduce((ac, c) => {
        if (c === '^^') {
          return ac += 1;
        }
        return ac;
      }, 0)
      return acc += cats;
    }
    return acc;
  }, 0);
};
