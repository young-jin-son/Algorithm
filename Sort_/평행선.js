const input = ['4', '0 0', '10 10', '0 10', '10 0'];

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input.shift();
const points = input.map(el => el.split(' ').map(Number)).sort((a, b) => (a[0] !== b[0]) ? a[0] - b[0] : a[1] - b[1]);

const [x, y] = [[], []];
let answer = 0;

for (let i = 0; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    if (points[i][0] === points[j][0]) {
      if (!x.includes(points[i][0])) {
        console.log('x', points[i][0]);
        console.log(points[i][1], points[j][1]);
        x.push(points[i][0]);
      }
    }
    if (points[i][1] === points[j][1]) {
      if (!y.includes(points[i][1])) {

        console.log('y', points[i][1]);
        console.log(points[i][0], points[j][0]);
        y.push(points[i][1]);
      }
    }
  }
}

console.log(x.length + y.length);