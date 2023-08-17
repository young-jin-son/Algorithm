const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [t, ...input] = fs.readFileSync(path).toString().trim().split('\n');
const answer = [];
for (let i = 0; i < t; i++) {
  const points = input.slice(i * 4, (i + 1) * 4).map(el => el.split(' ').map(Number)).sort((a, b) => (a[0] === b[0]) ? a[1] - b[1] : a[0] - b[0]);
  if (
    points[0][0] !== points[1][0] ||
    points[1][1] !== points[3][1] ||
    points[0][1] !== points[2][1] ||
    points[2][0] !== points[3][0]
  ) {
    answer.push(0);
  }
  else if (points[1][1] - points[0][1] !== points[2][0] - points[1][0]) {
    answer.push(0);
  }
  else {
    answer.push(1);
  }
}
console.log(answer.join('\n'));
