const fs = require('fs');
const path = (process.platform === 'linux') ? '/dev/stdin' : './test.txt';
const [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');

const sorted = input.map(el => el.split(' ').map(Number)).sort((a, b) => (a[0] === b[0]) ? b[1] - a[1] : b[0] - a[0]);

let answer = sorted[0][1];
let day = sorted[0][0];

for (let i = 0; i < n; i++) {
  if (day <= 0) break;
  if (sorted[i][0] <= day) {
    console.log(sorted[i]);
    answer += sorted[i][1];
    day--;
  }
}
// let answer = sorted[0][1];
// let prev = sorted[0][0];
// for (let i = 0; i < n; i++) {
//   if (sorted[i][0] !== prev) {
//     answer += sorted[i][1];
//     console.log(sorted[i][1]);
//   }
//   prev = sorted[i][0];
// }
console.log(sorted);
console.log(answer);