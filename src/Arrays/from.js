let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let compyNumbers = Array.from(numbers);

console.log(compyNumbers);

let evenNumbers = Array.from(numbers, (number) => number % 2 == 0);

console.log(evenNumbers);
