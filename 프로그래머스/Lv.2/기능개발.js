function solution(progresses, speeds) {
  const answer = [];
  const n = progresses.length;
  let prev = Number.MAX_SAFE_INTEGER;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    const days = Math.ceil((100 - progresses[i]) / speeds[i]);
    if (prev < days) {
      answer.push(cnt);
      cnt = 1;
    } else {
      cnt++;
    }
    prev = days;
  }
  answer.push(cnt);
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
console.log(solution([99, 98, 99, 95, 97], [1, 2, 3, 2, 2])); // [3, 2]