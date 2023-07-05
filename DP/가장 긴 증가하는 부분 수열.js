const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);

const dp = new Array(n).fill(1);

for (let i = 0; i < n; i++) {
  let tmp = 0;
  for (let j = 0; j < i; j++) {
    // 증가하고, 현재 부분 배열 중 최대값이라면
    if (arr[i] > arr[j] && dp[j] > tmp) {
      tmp = dp[j];
    }
  }
  dp[i] = tmp + 1;
}

console.log(Math.max(...dp));