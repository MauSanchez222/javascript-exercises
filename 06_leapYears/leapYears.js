const leapYears = function(year) {
    let leap = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? true : false;
    return leap;
};

// Do not edit below this line
module.exports = leapYears;
