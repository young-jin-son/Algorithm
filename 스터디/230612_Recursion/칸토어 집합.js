const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n').map(Number);
const result = [];

const sol = (num) => {
  if (!num) return '-';
  const blanks = Array(3 ** (num - 1)).fill(' ').join('');
  return sol(num - 1) + blanks + sol(num - 1);
}

for (let i = 0; i < input.length; i++) {
  result.push(sol(input[i]));
}

console.log(result.join('\n'));