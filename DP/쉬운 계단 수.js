const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const n = +fs.readFileSync(path).toString().trim();
const mod = 1000000000;
const dp = new Array(10).fill(1);
dp[0] = 0;

for (let i = 1; i < n; i++) {
  let dp_copy = [...dp];
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      dp[0] = dp_copy[1] % mod;
    } else if (j === 9) {
      dp[9] = dp_copy[8] % mod;
    } else {
      dp[j] = (dp_copy[j - 1] + dp_copy[j + 1]) % mod;
    }
  }
}

console.log(dp.reduce((a, b) => (a + b) % mod, 0));