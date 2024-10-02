function solution(x, y, n) {
  if (x === y) {
    return 0;
  }

  let answer = 0;
  let set = new Set([x]);

  while (set.size) {
    const newSet = new Set();
    answer++;

    for (const v of set) {
      if (v * 3 === y || v * 2 === y || v + n === y) {
        return answer;
      }
      if (v * 3 < y) newSet.add(v * 3);
      if (v * 2 < y) newSet.add(v * 2);
      if (v + n < y) newSet.add(v + n);
    }

    set = newSet;
  }

  return -1;
}

console.log(solution(10, 40, 5)); // 2 
console.log(solution(10, 40, 30)); // 1
console.log(solution(2, 5, 4)); // -1
console.log(solution(4, 4, 1)); // 0