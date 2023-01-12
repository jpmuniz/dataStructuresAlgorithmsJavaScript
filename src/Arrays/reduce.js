let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const someNumbers = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);

console.log(someNumbers);
