const repeatString = function(string, num) {
    if(num<0) {
        return 'ERROR';
    }

    let ansString='';
    for(let i=0; i<num; i++){
        ansString+=string;
    }
    return ansString;
};

// Do not edit below this line
module.exports = repeatString;
