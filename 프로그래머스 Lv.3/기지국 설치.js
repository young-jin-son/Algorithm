function solution(n, stations, w) {
  let answer = 0;
  let [start, end] = [1, n];
  for (const s of stations) {
    end = s - w - 1;
    const scope = end - start + 1;
    answer += Math.ceil(scope / (w * 2 + 1));
    start = s + w + 1;
  }
  if (start <= n) {
    const scope = n - start + 1;
    answer += Math.ceil(scope / (w * 2 + 1));
  }
  return answer;
}

console.log(solution(11, [4, 11], 1)) // 3
console.log(solution(16, [9], 2)) // 3
console.log(solution(5, [3], 1)) // 2
console.log(solution(5, [3], 2)) // 0