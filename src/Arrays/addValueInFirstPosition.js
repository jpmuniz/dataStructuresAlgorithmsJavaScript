let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = numbers.length; i >= 0; i--) {
  numbers[i] = numbers[i - 1];
}
numbers[0] = -1;

numbers.unshift(-2);

console.log(numbers);
