const removeFromArray = function(array, ...args) {
    const ansArray=[];
    array.forEach(element => {
        if(!args.includes(element)){
            ansArray.push(element);
        }
    });

    return ansArray;
};

// Do not edit below this line
module.exports = removeFromArray;
