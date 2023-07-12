const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split("\n");

const sol = (input) => {
  const t = +input[0];
  const arr = input.slice(1).map(el => el.split(' ').map(Number));
  const result = [];
  for (let i = 0; i < t; i++) {
    const [a, b] = arr[i];
    result.push(String(Math.pow(a, b)).at(-1));
  }
  return result;
}

console.log(sol(input));