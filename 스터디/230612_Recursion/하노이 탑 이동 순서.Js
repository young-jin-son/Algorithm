// TODO: 이해못함
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const n = +fs.readFileSync(path).toString().trim();
const result = [];

const hanoi = (num, from, tmp, to) => {
  if (!num) return;
  hanoi(num - 1, from, to, tmp);
  result.push([from, to]);
  hanoi(num - 1, tmp, from, to);
}

hanoi(n, 1, 2, 3);
console.log(result.length + '\n' + result.map(v => v.join(' ')).join('\n'));