function solution(n) {
  const dp = [1];
  while (dp.at(-1) <= n) {
    dp.push(dp.at(-1) * 3 + 1);
  }
  dp.pop();

  let answer = Array(dp.length).fill(1);
  let i = 0;
  let cur = dp.at(-1);
  let addNum = dp.at(-i - 1) - dp.at(-i - 2) || 1;

  while (cur !== n && i < answer.length) {
    while (cur + addNum <= n) {
      cur += addNum;
      answer[i] *= 2;
    }
    i += 1;
    addNum = dp.at(-i - 1) - dp.at(-i - 2) || 1;
  }

  return answer.join("")
}

function solution2(n) {
  return n === 0 ? '' : solution2(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}

console.log(solution(1)); // 1
console.log(solution(2)); // 2
console.log(solution(3)); // 4
console.log(solution(4)); // 11