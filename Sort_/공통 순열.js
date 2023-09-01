function findLongestCommonSubsequence(a, b) {
  const n = a.length;
  const m = b.length;

  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(''));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + a[i - 1];
      } else {
        dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i][j - 1];
      }
    }
  }

  return dp[n][m];
}

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

for (let i = 0; i < input.length; i += 2) {
  const a = input[i].split('').sort();
  const b = input[i + 1].split('').sort();
  const commonSubsequence = findLongestCommonSubsequence(a, b);
  console.log(commonSubsequence);
}
