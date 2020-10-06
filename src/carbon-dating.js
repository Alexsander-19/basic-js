const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(numActivity) {
  if (Number.isInteger(numActivity) && typeof  numActivity === 'string') {
    const t = Math.log2(MODERN_ACTIVITY / numActivity) / (0.693 / HALF_LIFE_PERIOD);
    return Math.round(t);
  }
  return false;
};