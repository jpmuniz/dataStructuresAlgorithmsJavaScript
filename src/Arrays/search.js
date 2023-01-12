let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let persons = [
  {
    name: "João Pedro",
    age: 34,
  },
  {
    name: "Liz",
    age: 6,
  },
  {
    name: "Neusa",
    age: 58,
  },
  {
    name: "Pedro Henrique",
    age: 33,
  },
];

console.log(numbers.indexOf(15));
console.log(numbers.lastIndexOf(100));

console.log(persons.find((data) => data.name === "João Pedro"));
console.log(persons.findIndex((data) => data.name === "Liz"));
