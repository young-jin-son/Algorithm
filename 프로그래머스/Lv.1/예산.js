function solution(d, budget) {
  let count = 0;
  d = d.sort((a, b) => b - a);
  while (budget >= 0) {
    budget -= d.pop();
    if (budget >= 0) count++;
  }
  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([2, 2, 3, 3], 10)); // 4