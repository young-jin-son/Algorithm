const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...dp] = fs.readFileSync(path).toString().trim().split('\n').map(Number);
// const dp = [arr[0]];
for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i - 1] * dp[i], dp[i]);
}
console.log(Math.max(...dp).toFixed(3));