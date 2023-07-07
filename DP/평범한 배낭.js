const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const sol = (input) => {
  const [n, m] = input[0].split(' ').map(Number);
  const arr = input.slice(1).map(el => el.split(' ').map(Number));
  for (let i = 0; i < n; i++) {
    const [w, v] = arr[i];
    console.log(w, v);
  }
}

console.log(sol(input));
