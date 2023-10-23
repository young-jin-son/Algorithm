const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const [C, N] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(el => el.split(' ').map(Number));
const dp = Array.from({ length: C + 1 }, () => Infinity);

for (const [cost, customer] of arr) {
  if (cost < dp[customer]) {
    dp[customer] = cost;
  }
  for (let i = 1; i <= C; i++) {
    dp[i] = (i < customer) ?
      Math.min(dp[i], cost) :
      Math.min(dp[i], dp[customer] + dp[i - customer]);
  }
}

console.log(dp[C]);