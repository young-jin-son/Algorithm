function solution(dartResult) {
  let answer = 0;
  const power = { "S": 1, "D": 2, "T": 3 };

  let prev = 0;
  let cur = 0;

  for (let i = 0; i < dartResult.length; i += 2) {
    if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
      cur = 10;
      i++;
    } else {
      cur = Number(dartResult[i]);
    }
    cur = Math.pow(cur, power[dartResult[i + 1]]);

    if (dartResult[i + 2] === "*") {
      cur *= 2;
      answer += prev;
      i++;
    } else if (dartResult[i + 2] === "#") {
      cur *= -1;
      i++;
    }

    answer += cur;
    prev = cur;
  }

  return answer;
}

console.log(solution("1S2D*3T")); // 37
console.log(solution("1D2S#10S")); // 9
console.log(solution("1D2S0T")); // 3
console.log(solution("1S*2T*3S")); // 23
console.log(solution("1D#2S*3S")); // 5
console.log(solution("1T2D3D#")); // -4
console.log(solution("1D2S3T*")); // 59