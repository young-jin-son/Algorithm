const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [t, ...input] = fs.readFileSync(path).toString().trim().split('\n').map(Number);

const arr = [0];
const answer = [];

const check = (num) => {
  for (let i = 1; i <= 50; i++) {
    for (let j = 1; j <= 50; j++) {
      for (let k = 1; k <= 50; k++) {
        if (arr[i] + arr[j] + arr[k] === num) {
          return 1;
        }
      }
    }
  }
  return 0;
}

for (let i = 1; i <= 1000; i++) {
  arr[i] = arr[i - 1] + i;
}

for (const n of input) {
  answer.push(check(n));
}

console.log(answer.join('\n'));