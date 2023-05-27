// const input = ['7', '10 20 30 40 50 60 70', '1'];
// const input = ['5', '3 5 1 2 4', '2'];
// const input = ['10', '19 20 17 18 15 16 13 14 11 12', '5'];

// const input = ['10', '19 17 18 15 16 20 13 14 11 12', '3']; // 19 18 17 20 15 16 ...

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(v => Number(v));
let s = Number(input[2]);

for (let i = 0; i < n - 1; i++) {
  if (s <= 0) break;
  const sliced = arr.slice(i, i + s + 1);
  const max = Math.max(...sliced);
  let maxIndex = arr.indexOf(max);

  s -= maxIndex - i;
  while (maxIndex > i) {
    arr[maxIndex] = arr[maxIndex - 1];
    maxIndex--;
  }
  arr[i] = max;
}

console.log(arr.join(' '));