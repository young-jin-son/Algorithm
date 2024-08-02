function solution(s) {
  const idx = {};
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    if (idx[s[i]] === undefined) {
      answer.push(-1);
    } else {
      answer.push(i - idx[s[i]]);
    }
    idx[s[i]] = i;
  }

  return answer;
}

console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]
console.log(solution("baaab")); // [-1, -1, 1, 1, 4]