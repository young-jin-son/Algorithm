function solution(t, p) {
  let count = 0;
  const pNum = Number(p);
  for (let i = 0; i < t.length - p.length + 1; i++) {
    const subNum = Number(t.slice(i, i + p.length));
    if (subNum <= pNum) {
      count++;
    }
  }
  return count;
}

console.log(solution("3141592", "271")); // 2
console.log(solution("500220839878", "7")); // 8
console.log(solution("10203", "15")); // 3