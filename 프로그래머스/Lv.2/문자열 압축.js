function solution(s) {
  let answer = s.length;
  const mid = Math.floor(s.length / 2);

  for (let i = mid; i > 0; i--) {
    let substr = s.slice(0, i);
    const stack = [substr];
    let count = 1;

    for (let j = i; j < s.length; j += i) {
      substr = s.slice(j, j + i);

      if (stack.at(-1) === substr) {
        count += 1;
      } else {
        if (count > 1) stack.push(stack.pop() + count);
        stack.push(substr);
        count = 1;
      }
    }

    if (count > 1) stack.push(stack.pop() + count);

    answer = Math.min(answer, stack.join("").length);
  }

  return answer;
}