const reverseString = function(string) {
    let newString = '';
    let splitString = string.split('');
        for(let i = splitString.length; i > 0; i--){
            newString+= (splitString.pop());
        }
return newString
};

// Do not edit below this line
module.exports = reverseString;
