const removeFromArray = function(array, ...deletions) {
    for (let i = 0; i<deletions.length; i++){
        for (let j = 0; j<array.length; j++){
            if(array[j] === deletions[i]){
                array.splice(j,1);
            } 
        }
    }
return array;
};

// Do not edit below this line
module.exports = removeFromArray;
