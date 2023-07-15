const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [m, n] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

const isPrime = (num) => {
  if (num === 1) return false;
  for (let j = 2; j <= Math.sqrt(num); j++) {
    if (num % j === 0) return false;
  }
  return true;
}

const primes = [];
for (let i = m; i <= n; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}

console.log(primes.join('\n'));