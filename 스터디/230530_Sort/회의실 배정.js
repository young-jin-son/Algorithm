const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = 0;
const meetings = arr
  .map(el => el.split(' ').map(Number))
  .sort((a, b) => (a[1] === b[1]) ? a[0] - b[0] : a[1] - b[1]);

let endTime = 0;
meetings.forEach((meeting) => {
  if (meeting[0] >= endTime) {
    answer++;
    endTime = meeting[1];
  }
});

console.log(answer);