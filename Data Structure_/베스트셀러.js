const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .sort((a, b) => a - b);
const counter = {};

for (const title of arr) {
  if (counter[title]) {
    counter[title] += 1;
  } else {
    counter[title] = 1;
  }
}
const result = Object.keys(counter)
  .sort((a, b) => counter[a] === counter[b] ? a.localeCompare(b) : counter[b] - counter[a]);

console.log(result[0]);
