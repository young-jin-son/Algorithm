function solution(n, t, m, p) {
  let answer = "";
  let dNum = 0;
  let nNum = 0;
  let turn = 1;

  while (answer.length < t) {
    nNum = dNum.toString(n).toUpperCase();

    for (let i = 0; i < nNum.length; i++) {
      if (turn % m === p % m) { answer += nNum[i]; }
      if (answer.length === t) { break; }
      turn++;
    }

    if (answer.length === t) { break; }
    dNum++;
  }

  return answer;
}

console.log(solution(2, 4, 2, 1)); // "0111"
console.log(solution(16, 16, 2, 1)); // "02468ACE11111111"
console.log(solution(16, 16, 2, 2)); // "13579BDF01234567"