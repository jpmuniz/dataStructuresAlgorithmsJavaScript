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

const names = persons.map((person) => person.name);

console.log(names);

const AGE_OF_MAJORITY = 18;

const adultPersons = persons.filter((person) => person.age > AGE_OF_MAJORITY);

console.log(adultPersons);
