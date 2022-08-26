const add = function(nr1, nr2) {
  return nr1 + nr2
};

const subtract = function(nr1, nr2) {
	return nr1 - nr2
};

const sum = function(array) {
  if (array.length === 0){
    return 0
  }
return array.reduce((total, num) =>{
    return total + num
 }, 0)
 
  };


const multiply = function(array) {
return array.reduce((total, num) =>{
    return total * num
 }, 1)
};

const power = function(nr1, nr2) {
	return nr1 ** nr2
};

const factorial = function fact(nr) {
    if (nr === 0 || nr === 1){
      return 1  
    }
    else{
      let acc = nr;
      while (nr>=2){
        acc *= (nr-1);
        nr--
      }
      return acc
    }
  } 


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
