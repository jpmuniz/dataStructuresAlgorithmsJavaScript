let length = 5;

let int16 = new Int16Array(length);

let array16 = [];

array16.length = length;

for (let i = 0; i < array16.length; i++) {
  int16[i] = i + 1;
}

console.log(int16);
