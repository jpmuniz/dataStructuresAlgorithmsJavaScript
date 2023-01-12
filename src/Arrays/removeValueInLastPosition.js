let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  if (i === numbers.length - 1) {
    numbers.splice(i, 1);
  }
}

numbers.pop();

console.log(numbers);
