const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, ...arr] = input;
n = Number(n);
arr = arr.map(i => i.split(' ').map(v => Number(v)));
solution(n, arr);

const solution = (n, arr) => {
  // 끝나는 시간 기준 오름차순 정렬
  // 끝나는 시간이 같으면 시작하는 시간 기준 오름차순 정렬
  let answer = 1;
  arr = arr.sort((a, b) => (a[1] - b[1] === 0) ? a[0] = b[0] : a[1] - b[1]);
  let prev = arr[0];

  for (let i = 1; i < n; i++) {
    if (prev[1] <= arr[i][0]) {
      count++;
      prev = arr[i];
    }
  }
  console.log(answer);
}
