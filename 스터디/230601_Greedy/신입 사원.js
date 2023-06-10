const fs = require('fs');
const filePath = (process.platform === 'linux') ? '/dev/stdin' : './test.txt';
const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let index = 0;
let answer = '';

for (let i = 0; i < t; i++) {
  const n = +input[index];
  const participants = input.slice(index + 1, index + n + 1)
    .map(el => el.split(' ').map(Number))
    .sort((a, b) => a[0] - b[0]);
  let count = 1;
  let minRank = participants[0][1];

  for (let j = 1; j < n; j++) {
    const curRank = participants[j][1];
    if (curRank < minRank) {
      minRank = curRank;
      count++;
    }
  }
  answer += count + '\n';
  index += n + 1;
}

console.log(answer);