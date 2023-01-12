const getSome = (name) => {
  const persons = [
    {
      name: "João",
      age: 34,
    },
    {
      name: "Liz",
      age: 6,
    },
    {
      name: "Neusa",
      age: 65,
    },
  ];

  return persons.some((data) => data.name == name);
};

const getEvery = (name) => {
  const persons = [
    {
      name: "Liz",
      age: 34,
    },
    {
      name: "Liz",
      age: 6,
    },
    {
      name: "Liz",
      age: 65,
    },
  ];

  return persons.every((data) => data.name == name);
};

console.log(getSome("João"));

console.log(getEvery("Liz"));
