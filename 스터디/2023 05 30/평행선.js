const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = +input[0];
const coords = input.slice(1).map(el => el.split(' ').map(Number));

// 좌표들의 x좌표, y좌표를 카운트 할 객체
const xCoordsCounter = {};
const yCoordsCounter = {};
let answer = 0;

for (let i = 0; i < n; i++) {
  const [x, y] = [coords[i][0], coords[i][1]];
  // 카운터 객체에 해당 값이 있으면 +1을 하고, 없으면 1로 초기화
  (xCoordsCounter[x]) ? xCoordsCounter[x]++ : xCoordsCounter[x] = 1;
  (yCoordsCounter[y]) ? yCoordsCounter[y]++ : yCoordsCounter[y] = 1;
}

// 카운터 객체에서 count가 2 이상인 좌표들을 필터링
const filteredX = Object.values(xCoordsCounter).filter(v => v > 1);
const filteredY = Object.values(yCoordsCounter).filter(v => v > 1);

answer = filteredX.length + filteredY.length;
console.log(answer);
