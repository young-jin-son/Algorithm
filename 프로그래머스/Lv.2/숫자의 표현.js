function solution(n) {
  let answer = 1;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    let tmp = i;
    for (let j = i + 1; tmp < n; j++) {
      tmp += j;
    }
    if (tmp === n) answer++;
  }
  return answer;
}

console.log(solution(15));