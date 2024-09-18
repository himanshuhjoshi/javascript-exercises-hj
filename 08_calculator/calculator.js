const add = function(num1, num2) {
  return num1+num2;
};

const subtract = function(max,min) {
  if(min>max) [max, min] = [min, max];
  return max-min;
};

const sum = function(array) {
  let result = 0;
	array.forEach((element) => result += element);
  return result;
};

const multiply = function(array) {
  let result = 1;
  array.forEach(element => result *= element);
  return result;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(arg) {
  if(arg == 0 || arg == 1) {return 1}
  else{
    let result = 1;
    for(let i=1; i<=arg; i++){
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
