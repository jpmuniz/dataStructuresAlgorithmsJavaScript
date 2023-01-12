const zero = 0;

const obj = {
  name: "number",
  value: 10,
};

const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -2];

let numbers = negativeNumbers.concat(zero, positiveNumbers, obj);

console.log(numbers);
