const fibonacci = function(num) {
    if(num<0) {return 'OOPS'}
    else if(num == 1) {return 1};
    let num1 = 0;
    let num2 = 1;
    let sum = 0;
    for(let n=2; n<=num; n++){
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }

    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
