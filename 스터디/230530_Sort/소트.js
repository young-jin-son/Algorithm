// const input = ['7', '10 20 30 40 50 60 70', '1'];
// const input = ['5', '3 5 1 2 4', '2'];
// const input = ['10', '19 20 17 18 15 16 13 14 11 12', '5'];
// const input = ['10', '19 17 18 15 16 20 13 14 11 12', '3']; // 19 18 17 20 15 16 ...

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let s = Number(input[2]);

for (let i = 0; i < n; i++) {
  if (s <= 0) break;
  // i부터  i + s까지의 범위 중 최대값을 찾음 (교환할 수 있는 횟수 고려)
  const max = Math.max(...arr.slice(i, i + s + 1));
  let maxIndex = arr.indexOf(max);
  // max가 i 위치로 오게 교환해야 하기 때문에 교환 횟수를 우선 뺌
  s -= maxIndex - i;
  // maxIndex를 현재의 i 위치로 이동시키기 위해 하나씩 위치를 이동
  while (maxIndex > i) {
    arr[maxIndex] = arr[maxIndex - 1];
    maxIndex--;
  }
  arr[i] = max;
}

console.log(arr.join(' '));
