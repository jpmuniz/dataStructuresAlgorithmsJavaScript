let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];

averageTemp[1] = [81, 79, 75, 75, 73, 73];

averageTemp[2] = [1, 9, 5, 7, 3, 2];

for (let i = 0; i < averageTemp.length; i++) {
  for (let j = 0; j < averageTemp[i].length; j++) {
    for (let z = 0; z < averageTemp[i][j].length; z++) {
      console.log(averageTemp[i][j][z]);
    }
  }
}
console.table(averageTemp);
