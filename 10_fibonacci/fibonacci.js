const fibonacci = function(nr) {
    let nrsArray = [];
    let last;

    if(nr < 0){
        return 'OOPS'
    }

    for (let i = 0; i < nr; i++){
        if (nrsArray.length < 2){
            nrsArray.push(1)
        }
        else{
            nrsArray.push(nrsArray[i-1]+nrsArray[i-2])
        }
    }

    last = nrsArray.length-1;

    return nrsArray[last]
};

// Do not edit below this line
module.exports = fibonacci;
