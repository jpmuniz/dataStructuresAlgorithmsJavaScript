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

const numbers = [0, 1];

const response = persons.map((person) => person.name.includes("Liz"));

console.log(response);

console.log(numbers.includes(1));
