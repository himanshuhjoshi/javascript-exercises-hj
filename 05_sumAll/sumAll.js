const sumAll = function(num1, num2) {
    if(num1<0 || num2<0 || typeof(num1)!='number' || typeof(num2)!='number' ){
        return 'ERROR';
    }

    if(num1>num2){
        max=num1;
        min=num2;
    }
    else {
        max=num2;
        min=num1;
    }
    let ans=0;
    for(let i=min; i<=max; i++){
        ans += i;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
