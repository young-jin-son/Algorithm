function solution(priorities, location) {
  const n = priorities.length;
  let max = Math.max(...priorities);
  let maxIdx = priorities.indexOf(max);
  let cnt = 0;
  for (let i = maxIdx; ; i++) {
    if (i % n === location && max === priorities[i % n]) {
      return cnt + 1;
    }
    if (max === priorities[i % n]) {
      priorities[i % n] = 0;
      max = Math.max(...priorities);
      cnt++;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5