const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, b] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

const sol = (n, b) => {
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  while (n > 0) {
    const remainder = n % b;
    result = digits[remainder] + result;
    n = Math.floor(n / b);
  }

  return result;
}

console.log(sol(n, b));