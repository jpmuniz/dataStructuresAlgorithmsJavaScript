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

const arrayEntries = persons.entries();

for (const entrie of arrayEntries) {
  console.log(entrie);
}

const arrayKeys = persons.keys();
console.log(arrayKeys.next());
for (const key of arrayKeys) {
  console.log(key);
}

const arrayValues = persons.values();
console.log(arrayValues.next());
for (const value of arrayValues) {
  console.log(value);
}
