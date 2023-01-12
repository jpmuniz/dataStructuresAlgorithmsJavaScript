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

const names = ["Ana", "ana", "john", "John", "Beatriz", "Cesar"];

const comparePerson = (personA, personB) => {
  if (personA.age < personB.age) {
    return -1;
  }
  if (personA.age > personB.age) {
    return 1;
  }
  return 0;
};

const compareNames = (nameA, nameB) => {
  if (nameA.toLowerCase() < nameB.toLowerCase()) {
    return -1;
  }
  if (nameA.toLowerCase() > nameB.toLowerCase()) {
    return 1;
  }
  return 0;
};

console.log(numbers.reverse());

console.log(numbers.sort());

console.log(persons.sort(comparePerson));

console.log(names.sort(compareNames));

console.log(names.sort((a, b) => a.localeCompare(b)));
