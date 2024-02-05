function solution(n, left, right) {
  const arr = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  const answer = [];
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      arr[i][j] = Math.max(i + 1, j + 1);
    }
  }
  for (let i = 0; i < n; i++) {
    answer.push(...arr[i]);
  }
  return answer.slice(left, right + 1);
}

console.log(solution(3, 2, 5)); // [3, 2, 2 , 3]
console.log(solution(4, 7, 14)); // [4, 3, 3, 3, 4, 4, 4, 4]
