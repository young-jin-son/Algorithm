const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);

function getMaxIncrease(n, arr) {
  const dp = Array.from({ length: n }, () => 1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return dp;
}

const increaseDP = getMaxIncrease(n, arr);
const decreaseDP = getMaxIncrease(n, arr.reverse()).reverse();

const answer = increaseDP.map((v, i) => v + decreaseDP[i]);
console.log(Math.max(...answer) - 1);