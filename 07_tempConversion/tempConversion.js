const ftoc = function(tempF) {
  let convertedTempC = ((tempF-32)*(5/9));
  if (convertedTempC - Math.floor(convertedTempC) !== 0){
    convertedTempC = Number(parseFloat((tempF-32)*(5/9)).toFixed(1)); /* parseFloat rounds the number to 1 decimal, Number converts the result into a number*/
  } 
  return convertedTempC;
};

const ctof = function(tempC) {
  let convertedTempF = ((tempC*1.8+32));
  if (convertedTempF - Math.floor(convertedTempF) !== 0){
    convertedTempF = Number(parseFloat(tempC*1.8+32).toFixed(1)); /* parseFloat rounds the number to 1 decimal, Number converts the result into a number*/
  } 
  return convertedTempF
  
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
