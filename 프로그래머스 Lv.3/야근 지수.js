function solution(n, works) {
  works.sort((a, b) => b - a);
  while (n && works[0]) {
    const max = works[0];
    for (let i = 0; i < works.length; i++) {
      if (works[i] >= max) {
        works[i]--;
        n--;
      } else break;
      if (!n) break;
    }
  }
  return works.reduce((a, b) => a + b * b, 0);
}

console.log(solution(4, [4, 3, 3])) // 12
console.log(solution(1, [2, 1, 2])) // 6
console.log(solution(3, [1, 1])) // 0
console.log(solution(4, [1, 5, 9]));