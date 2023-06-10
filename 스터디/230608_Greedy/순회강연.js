const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');
const lectures = input.map(el => el.split(' ').map(Number)).sort((a, b) => (a[1] === b[1]) ? b[0] - a[0] : b[1] - a[1]);
if (n === '0') {
  console.log(0);
} else {
  let day = lectures[0][1] - 1;
  let answer = lectures[0][0];
  const finished = Array(n).fill(0);
  finished[0] = 1;

  for (let i = 1; i < n && day > 0; i++) {
    if (lectures[i][1] >= day) {
      let max = -1;
      let maxIndex = 0;
      for (let j = 0; j < n; j++) {
        if (lectures[j][1] >= day && !finished[j] && lectures[j][0] > max) {
          max = lectures[j][0];
          maxIndex = j;
        }
      }
      answer += max;
      finished[maxIndex] = 1;
    } else {
      i--;
    }
    day--;
  }
  console.log(answer);
}