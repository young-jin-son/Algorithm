function solution(topping) {
  let answer = 0;
  const remain = {};
  for (const t of topping) {
    remain[t] = (remain[t] || 0) + 1;
  }

  const left = new Set();
  const right = new Set(topping);

  for (const t of topping) {
    if (remain[t]) {
      left.add(t);
      remain[t]--;
      if (!remain[t]) { right.delete(t); }
    }
    answer += left.size === right.size;
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
console.log(solution([1, 2, 3, 1, 4])); // 0
// console.log(solution()); // 
// console.log(solution()); // 