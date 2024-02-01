function solution(n) {
  const fibo = [0, 1];
  const divider = 1234567;
  for (let i = 2; i <= n; i++) {
    fibo.push((fibo[i - 1] + fibo[i - 2]) % divider);
  }
  return fibo[n];
}

console.log(solution(3)); // 2
console.log(solution(5)); // 5