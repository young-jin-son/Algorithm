const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let [n, k] = fs.readFileSync(path).toString().trim().split(' ').map(Number);
let cnt = 0;
while (n !== k) {
  console.log(n);
  if (k > n * 3) {
    n *= 2;
  } else if (k > n) {
    n += 1;
  } else {
    n -= 1;
  }
  cnt++;
}

console.log(cnt);
