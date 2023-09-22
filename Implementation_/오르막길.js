const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);
let answer = 0;
let tmp = 0;

for (let i = 1; i < n; i++) {
  if (arr[i] > arr[i - 1]) {
    tmp += arr[i] - arr[i - 1];
  } else {
    tmp = 0;
  }

  if (tmp > answer) {
    answer = tmp;
  }
}

console.log(answer);