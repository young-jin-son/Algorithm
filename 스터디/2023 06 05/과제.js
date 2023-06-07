const fs = require('fs');
const path = (process.platform === 'linux') ? '/dev/stdin' : './test.txt';
const [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');
let sorted = input.map(el => el.split(' ').map(Number)).sort((a, b) => (a[0] === b[0]) ? b[1] - a[1] : b[0] - a[0]); // 내림차순으로 정렬

console.log(sorted);
let [day, answer] = sorted.shift();
day--;
let index = 1;
// const finished = Array(Number(n)).fill(0).map((v, i) => (i) ? v : 1);

for (let i = 0; i < sorted.length; i++) {
  if (sorted[i][0] <= day) {
    const sliced = sorted.slice(0, i + 1);
    const max = Math.max(sliced.map(v => v[1]));
    const maxIndex = sorted.map(v => v[1]).indexOf(max);
    sorted.splice(maxIndex, 1);
    answer += max;
    console.log(answer);
  } else {
    sorted.splice(i, 1);
  }
  console.log(sorted);
  day--;
  console.log('------------');
}

console.log(answer);