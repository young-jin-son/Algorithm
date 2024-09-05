function solution(citations) {
  const n = citations.length;
  citations.sort((a, b) => a - b);
  let h = 0;

  for (let i = 0; i < n; i++) {
    if (citations[i] === h) continue;
    if (n - i >= citations[i] && i <= citations[i]) {
      h = citations[i];
    } else {
      let tmp = h;
      while (tmp + 1 <= n - i && i <= tmp + 1) {
        tmp++;
      }
      h = tmp;
      break;
    }
  }

  return h;
}

console.log(solution([3, 0, 6, 1, 5])); // 3
console.log(solution([0, 1, 7, 8])); // 2
console.log(solution([0, 0, 0, 0, 1])); // 0