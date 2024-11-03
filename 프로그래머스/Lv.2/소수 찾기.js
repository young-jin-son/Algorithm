function solution(numbers) {
  const set = new Set();
  let count = 0;

  const isPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  const permute = (cur, remain) => {
    if (cur.length > 0) {
      set.add(Number(cur));
    }

    for (let i = 0; i < remain.length; i++) {
      permute(cur + remain[i], remain.slice(0, i) + remain.slice(i + 1));
    }
  }

  permute("", numbers);

  for (const v of set) {
    if (isPrime(v)) count++;
  }

  return count;
}

console.log(solution("17")); // 3
console.log(solution("011")); // 2