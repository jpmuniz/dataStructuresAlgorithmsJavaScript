const fibonacci = [];

fibonacci[1] = 1;

fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 0; i < 20; i++) {
  console.log(fibonacci[i]);
}
