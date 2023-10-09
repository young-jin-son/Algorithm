const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const [N, S, R] = input[0].split(' ').map(Number);
const damaged = input[1].split(' ').map(Number);
const extra = input[2].split(' ').map(Number);
let answer = S;

const damagedSet = new Set(damaged);
const extraSet = new Set(extra);

for (const i of damagedSet) {
  if (extraSet.has(i)) {
    extraSet.delete(i);
    damagedSet.delete(i);
    answer--;
  }
}

for (const i of damagedSet) {
  for (const j of extraSet) {
    if (j - 1 <= i && i <= j + 1) {
      extraSet.delete(j);
      answer--;
      break;
    } else if (j + 1 < i) {
      break;
    }
  }
}

console.log(answer);