const fs = require("fs");
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let input = fs.readFileSync(path).toString().split('\n');

const ds = [
  [-1, 0], // 왼쪽
  [1, 0], // 오른쪽
  [0, 1], // 앞
  [0, -1], // 뒤
];
const [M, N] = input.shift().split(' ').map(Number);
const queue = [];
const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));
let count = M * N;
let answer = 0;

for (let i = 0; i < input.length; i++) {
  const box = input[i].split(' ').map(Number);
  box.forEach((tomato, pos) => {
    if (tomato === 1) {
      queue.push([i % N, pos, 0]);
      visited[i % N][pos] = 1;
      count--;
    } else if (tomato === -1) {
      visited[i % N][pos] = 1;
      count--;
    }
  });
}

let idx = 0;
while (queue.length != idx) {
  const [x, y, pos] = queue[idx];
  for (let i = 0; i < ds.length; i++) {
    const xPos = x + ds[i][0];
    const yPos = y + ds[i][1];

    if (xPos < 0 || yPos < 0 || xPos >= N || yPos >= M)
      continue;
    if (!visited[xPos][yPos]) {
      visited[xPos][yPos] = 1;
      queue.push([xPos, yPos, pos + 1]);
      count--;
    }
  }

  idx++;
  answer = pos;
}

console.log(count ? -1 : answer);