const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const arr = fs.readFileSync(path)
  .toString()
  .trim()
  .split(/\s/)
  .slice(1)
  .map(Number);
const numCount = Array(1003).fill(0);
for (const num of arr) {
  numCount[num] += 1;
}

const result = [];

let cur = 0;

while (numCount.reduce((a, b) => a + b, 0) > 0) {
  let flag = 1;

  if (numCount[cur] && numCount[cur + 1]) {
    for (let x = cur + 2; x <= 1001; x++) {
      if (numCount[x]) {
        result.push(...Array(numCount[cur]).fill(cur));
        numCount[cur] = 0;
        result.push(x);
        numCount[x]--;
        flag = 0;
        break;
      }
    }

    if (flag) {
      result.push(...Array(numCount[cur + 1]).fill(cur + 1));
      numCount[cur + 1] = 0;
      result.push(...Array(numCount[cur]).fill(cur));
      numCount[cur] = 0;
    }
  } else {
    result.push(...Array(numCount[cur]).fill(cur));
    numCount[cur] = 0;
  }
  cur++;
}

console.log(result.join(' '));
