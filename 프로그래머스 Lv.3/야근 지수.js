function solution(n, works) {
  for (let i = 0; i < n; i++) {
    const max = Math.max(...works);
    const maxIdx = works.indexOf(max);
    if (max === 0) return 0;
    works[maxIdx]--;
  }
  const answer = works.reduce((a, b) => a + b * b, 0);
  return answer;
}
// O(n^2)
console.log(solution(4, [4, 3, 3])) // 12
console.log(solution(1, [2, 1, 2])) // 6
console.log(solution(3, [1, 1])) // 0
console.log(solution(4, [1, 5, 9]));