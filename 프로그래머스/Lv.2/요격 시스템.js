function solution(targets) {
  targets = targets.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let count = 1;
  let prev_e = targets[0][1];

  for (const [s, e] of targets) {
    if (s < prev_e) {
      prev_e = Math.min(prev_e, e);
    } else {
      count++;
      prev_e = e;
    }
  }

  return count;
}

console.log(solution([[4, 5], [4, 8], [10, 14], [11, 13], [5, 12], [3, 7], [1, 4]])); // 3
console.log(solution([[1, 2], [1, 7], [3, 6], [4, 10], [6, 8], [9, 12]])); // 4
console.log(solution([[1, 3], [2, 3], [0, 1]])); // 2
console.log(solution([[0, 10], [1, 2], [1, 3], [2, 3], [8, 9], [7, 10], [9, 10]]));// 4