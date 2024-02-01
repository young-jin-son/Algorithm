function solution(n, s) {
  if (s < n) return [-1];
  let avg = Math.floor(s / n);
  s -= avg * n;
  const answer = new Array(n).fill(avg);
  while (s) {
    const max = answer[n - 1];
    for (let i = answer.length - 1; i > 0; i--) {
      if (answer[i] >= max) {
        answer[i]++;
        s--;
      }
      if (!s) break;
    }
  }
  return answer;
}

console.log(solution(2, 9)) // [4, 5]
console.log(solution(2, 1)) // [-1]
console.log(solution(2, 8)) // [4, 4]