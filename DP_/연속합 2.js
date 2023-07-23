const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);
const dp1 = [arr[0]];
const dp2 = [arr[0]];

for (let i = 1; i < n; i++) {
  dp1[i] = Math.max(arr[i], arr[i] + dp1[i - 1]);
}

for (let i = 1; i < n; i++) {
  dp2[i] = (dp1[i - 1] > arr[i] + dp2[i - 1]) ? dp1[i - 1] : arr[i] + dp2[i - 1];
}

const dp1Max = Math.max(...dp1);
const dp2Max = Math.max(...dp2);
console.log(Math.max(dp1Max, dp2Max));