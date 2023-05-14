// const input = ['6', 'a', 'abcde', 'ab', 'abc', 'abcd', 'abcdef'];

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, ...arr] = input;
arr = arr.sort((a, b) => a.length - b.length);
n = Number(n);
let answer = n;

let isPrefix = false;
for (let i = 0; i < n; i++) {
  isPrefix = false;
  for (let j = i + 1; j < n; j++) {
    if (arr[i] === arr[j].slice(0, arr[i].length)) {
      isPrefix = true;
      break;
    }
  }

  if (isPrefix) {
    answer--;
  }
}

console.log(answer);

