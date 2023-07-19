const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);
const dp = [arr[0]];
for (let i = 1; i < n; i++) {
  dp[i] = Math.max(arr[i], arr[i] + dp[i - 1]);
}
console.log(dp);
console.log(Math.max(...dp));