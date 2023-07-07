const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);

const dp = new Array(n).fill(1);

for (let i = 0; i < n; i++) {
  let tmp = 0; // arr[i] 이전의 부분집합들 중 arr[i]가 들어갈 수 있는 최대 부분 집합의 크기가 담길 변수
  for (let j = 0; j < i; j++) {
    // 증가하고, 현재 부분 배열 중 최대값이라면
    if (arr[i] > arr[j] && dp[j] > tmp) {
      tmp = dp[j];
    }
  }
  dp[i] = tmp + 1;
}

console.log(Math.max(...dp));