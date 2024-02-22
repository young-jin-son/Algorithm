function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  return n.toString(k).split('0').map(Number).filter(n => n > 1 && isPrime(n)).length;
}

console.log(solution(437674, 3)); // 3
console.log(solution(110011, 10)); // 2
console.log(solution(50790702, 10)); // 4