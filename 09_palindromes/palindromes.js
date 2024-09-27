const palindromes = function (string) {
    const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const compareString = string.toLowerCase().split("").filter(char => alphanumeric.includes(char)).join("");
    const reverseString = compareString.split("").reverse().join("");
    //return compareString;
    return (reverseString === compareString);
};

// Do not edit below this line
module.exports = palindromes;
