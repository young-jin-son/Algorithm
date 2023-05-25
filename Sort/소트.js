const input = ['7', '10 20 30 40 50 60 70', '1'];
// const input = ['5', '3 5 1 2 4', '2'];
// const input = ['10', '19 20 17 18 15 16 13 14 11 12', '5'];

// const input = ['10', '19 17 18 15 16 20 13 14 11 12', '3'];

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(v => Number(v));
let s = Number(input[2]);

for (let i = 0; i < n - 1; i++) {
  if (s <= 0) break;
  let max = arr[i];
  let maxIndex = i;

  for (let j = i + 1; j < n; j++) {
    if (max < arr[j]) {
      max = arr[j];
      maxIndex = j;
    }
  }

  s -= maxIndex - i;

  if (s < 0) {
    i -= s;
  }

  while (maxIndex > i) {
    arr[maxIndex] = arr[maxIndex - 1];
    maxIndex--;
  }
  arr[i] = max;
}

console.log(arr.join(' '));