const getTheTitles = function(array) {
    // const resultArray=[];
    // array.forEach((element) => {
    //     resultArray.push(element.title);
    // });
    // return resultArray;

    return array.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
