function solution(elements) {
  const n = elements.length;
  const set = new Set();
  for (let i = 1; i <= n; i++) {
    for (let start = 0; start < n; start++) {
      let cnt = 0;
      let tmp = 0;
      let k = start;
      while (cnt < i) {
        tmp += elements[(k + n) % n];
        cnt++;
        k++;
      }
      set.add(tmp);
    }
  }
  return set.size;
}

console.log(solution([7, 9, 1, 1, 4]));