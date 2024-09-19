function solution(order) {
  let answer = 0;
  const stack = [];
  let cur = 1;

  for (const box of order) {
    if (box === cur) {
      answer++;
      cur++;
    } else if (box === stack.at(-1)) {
      while (box === stack.at(-1)) {
        stack.pop();
        answer++;
      }
    } else if (box > cur) {
      while (box > cur) {
        stack.push(cur);
        cur++;
      }
      answer++;
      cur++;
    } else {
      break;
    }
  }

  return answer;
}

console.log(solution([4, 3, 1, 2, 5])); // 2
console.log(solution([5, 4, 3, 2, 1])); // 5
console.log(solution([5, 4, 3, 1, 2])); // 5