// const input = ['5', '2 4 -10 4 -9'];
const input = ['6', '1000 999 1000 999 1000 999'];

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const coordinates = input[1].split(' ').map(Number);
let answer = [...coordinates].map(v => {
  let count = 0;
  const min = [];
  for (let i = 0; i < n; i++) {
    if (coordinates[i] < v) {
      if (min.indexOf(coordinates[i]) < 0) {
        count++;
        min.push(coordinates[i]);
      }
    }
  }
  // coordinates.forEach(c => {
  //   if (c < v) {
  //     if (min.indexOf(c) < 0) {
  //       count++;
  //       min.push(c);
  //     }
  //   }
  // });
  return count;
});

console.log(answer.join(' '));
