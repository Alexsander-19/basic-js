const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!date instanceof Object) {
    throw new Error();
  }
  if (date.toString() === new Date().toString()) {
    throw new Error();
  }

  const month = date.getMonth();
  if (month > 10 || month < 2) {
    return 'winter';
  } else if (month >= 8 && month < 11) {
    return '/autumn|fall/';
  } else if (month < 5) {
    return 'spring';
  } else  if (month < 9) {
    return 'summer';
  }
};
