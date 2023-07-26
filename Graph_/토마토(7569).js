const fs = require("fs");
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let input = fs.readFileSync(path).toString().split('\n');

const ds = [
  [-1, 0, 0], // 왼쪽
  [1, 0, 0], // 오른쪽
  [0, 1, 0], // 앞
  [0, -1, 0], // 뒤
  [0, 0, 1], // 위
  [0, 0, -1], // 아래
];
const [M, N, H] = input.shift().split(' ').map(Number);
const queue = [];
const visited = Array.from({ length: H }, () => Array.from({ length: N }, () => Array.from({ length: M }, () => 0)));
let count = M * N * H;
let z = 0;
let answer = 0;

for (let i = 0; i < input.length; i++) {
  const box = input[i].split(' ').map(Number);
  box.forEach((tomato, pos) => {
    if (tomato === 1) {
      queue.push([i % N, pos, z, 0]);
      visited[z][i % N][pos] = 1;
      count--;
    } else if (tomato === -1) {
      visited[z][i % N][pos] = 1;
      count--;
    }
  });
  if ((i + 1) % N === 0) {
    z++;
  }
}

let idx = 0;
while (queue.length != idx) {
  const [x, y, z, pos] = queue[idx];
  for (let i = 0; i < ds.length; i++) {
    const xPos = x + ds[i][0];
    const yPos = y + ds[i][1];
    const zPos = z + ds[i][2];

    if (xPos < 0 || yPos < 0 || zPos < 0 || xPos >= N || yPos >= M || zPos >= H)
      continue;
    if (!visited[zPos][xPos][yPos]) {
      visited[zPos][xPos][yPos] = 1;
      queue.push([xPos, yPos, zPos, pos + 1]);
      count--;
    }
  }

  idx++;
  answer = pos;
}

console.log(count ? -1 : answer);