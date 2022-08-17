const sumAll = function(start,end) {
    let numbers = [];
    let sum = 0;
    let aux;
        if(start>end){
            aux = start;
            start = end;
            end = aux;
        }

        if(start<0 || end<0){
            return 'ERROR';
        }
        else if (typeof start !== 'number' || typeof end !== 'number'){
            return 'ERROR';
        }

        for (end; end>=start; end--){
            numbers.unshift(end)
        };

        for (let i = 0; i<numbers.length; i++){
            sum+= numbers[i]
        }
return sum;
};

// Do not edit below this line
module.exports = sumAll;
