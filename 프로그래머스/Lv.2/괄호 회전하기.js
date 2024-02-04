function solution(s) {
  const n = s.length;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    const stack = [];
    let flag = true;
    for (let j = 0; j < n; j++) {
      const cur = s[(i + j) % n];
      if (cur === '(' || cur === '{' || cur === '[') {
        stack.push(cur);
      }
      else if (cur === ')') {
        if (stack.pop() !== '(') {
          flag = false;
          break;
        }
      } else if (cur === '}') {
        if (stack.pop() !== '{') {
          flag = false;
          break;
        }
      } else if (cur === ']') {
        if (stack.pop() !== '[') {
          flag = false;
          break;
        }
      }
    }
    if (flag && !stack.length) answer++;
  }
  return answer;
}

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0