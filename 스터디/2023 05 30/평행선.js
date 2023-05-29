const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = +input[0];
const coords = input.slice(1).map(el => el.split(' ').map(Number));

const xCoordsCounter = {};
const yCoordsCounter = {};
let answer = 0;

for (let i = 0; i < n; i++) {
  const [x, y] = [coords[i][0], coords[i][1]];
  (xCoordsCounter[x]) ? xCoordsCounter[x]++ : xCoordsCounter[x] = 1;
  (yCoordsCounter[y]) ? yCoordsCounter[y]++ : yCoordsCounter[y] = 1;
}

const filteredX = Object.values(xCoordsCounter).filter(v => v > 1);
const filteredY = Object.values(yCoordsCounter).filter(v => v > 1);

answer = filteredX.length + filteredY.length;
console.log(answer);
