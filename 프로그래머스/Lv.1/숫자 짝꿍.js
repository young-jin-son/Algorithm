function solution(X, Y) {
  const len = Math.max(X.length, Y.length);
  const xCount = Array(10).fill(0);
  const yCount = Array(10).fill(0);
  let answer = "";
  let subset = 0;

  for (let i = 0; i < len; i++) {
    if (X[i] !== undefined) { xCount[X[i]]++; }
    if (Y[i] !== undefined) { yCount[Y[i]]++; }
  }

  for (let i = 9; i > -1; i--) {
    subset = Math.min(xCount[i], yCount[i]);
    answer += String(i).repeat(subset);
  }

  if (!answer.length) return "-1";
  if (!Number(answer)) return "0";
  return answer;
  // return answer.length ? String(BigInt(answer)) : "-1";
}

console.log(solution("100", "2345")); // "-1"
console.log(solution("100", "203045")); // "0"
console.log(solution("100", "123450"))	// "10"
console.log(solution("12321", "42531"))	// "321"
console.log(solution("5525", "1255"))	// "552"