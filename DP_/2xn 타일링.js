const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const n = +fs.readFileSync(path).toString().trim();

const sol = (num) => {
  if (num <= 2) return num;
  const arr = [1, 2];
  for (let i = 2; i < num; i++) {
    arr.push((arr[i - 1] + arr[i - 2]) % 10007);
  }
  return arr.pop();
}

console.log(sol(n));