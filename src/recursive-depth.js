const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) {
      return 1;
    }
    return 1 + (Array.isArray(arr) ? arr.reduce((acc, i) => {
      return Math.max(acc, this.calculateDepth(i));
    },0) : -1);
  }
};