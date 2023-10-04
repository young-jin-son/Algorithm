const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n').map(el => el.split(' ').map(Number));
const size = 101;
const graph = Array.from({ length: size }, () =>
  Array.from({ length: size }, () => 0));
// 그래프 그리기
for (const [x1, y1, x2, y2] of input) {
  for (let i = x1; i < x2; i++) {
    for (let j = y1; j < y2; j++) {
      graph[i][j] = 1;
    }
  }
}
// 면적 계산
let result = 0;
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    result += graph[i][j];
  }
}
console.log(result);