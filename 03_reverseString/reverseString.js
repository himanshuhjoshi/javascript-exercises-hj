const reverseString = function(string) {
    const stringArray = string.split("");
    let ansString = '';
    for(let i=(stringArray.length-1); i>=0; i--){
        ansString += stringArray[i];
    }

    return ansString;
};

// Do not edit below this line
module.exports = reverseString;
