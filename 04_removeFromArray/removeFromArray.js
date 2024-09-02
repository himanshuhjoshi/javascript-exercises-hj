const removeFromArray = function(array, ...args) {
    const arrYArgs = [...args];
    let resultArr = [];
    
    array.forEach(element => {
        if(!arrYArgs.includes(element)){
            resultArr.push(element);
        }
    });
    return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
