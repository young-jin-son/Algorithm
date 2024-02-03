function solution(n) {
  if (!(n % 5)) return n / 5;
  let cnt = 0;
  while (n % 5 && n > 0) {
    n -= 3;
    cnt++;
  }
  if (n < 0) return -1;
  cnt += n / 5;
  return cnt;
}

console.log(solution(18)); // 4
console.log(solution(4));
console.log(solution(6));
console.log(solution(9));
console.log(solution(11));