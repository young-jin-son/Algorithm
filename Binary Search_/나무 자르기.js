const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, m, ...trees] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);
const maxH = Math.max(...trees);

function binarySearch(h, trees, min, max) {
  let result = 0;

  while (min <= max) {
    let SumWood = 0;
    const mid = Math.floor((min + max) / 2);

    trees.forEach((tree) => {
      const rest = tree - mid;
      if (rest > 0) {
        SumWood += rest;
      }
    });

    if (SumWood >= h) {
      if (mid > result) {
        result = mid;
      }
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return result;
}

const answer = binarySearch(m, trees, 0, maxH);
console.log(answer);