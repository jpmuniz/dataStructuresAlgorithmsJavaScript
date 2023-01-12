let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = numbers.length; i >= 0; i--) {
  if (i === 0) {
    numbers.splice(i, 1);
  }
}

numbers.shift();

console.log(numbers);
