const palindromes = function (str) {
    let splitStr = str.split(/[,.\s!]/);
    let newStr = '';
    str = str.split(/[,.\s!]/).join('');
   
    let backwards = (string) => {
        for (let i = splitStr.length-1; i >= 0; i--){
            for (let j = splitStr[i].length-1; j >= 0; j--)
            string += splitStr[i][j]
        }
        return string
    }
   
    return backwards(newStr).toLowerCase() === str.toLowerCase()
};

// Do not edit below this line
module.exports = palindromes;
