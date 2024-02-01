function solution(n) {
  const nBinaryOnes = [...(n.toString(2))].filter(x => x === '1').length;
  for (let i = n + 1; ; i++) {
    const nextBinaryOnes = [...(i.toString(2))].filter(x => x === '1').length;
    if (nextBinaryOnes === nBinaryOnes) return i;
  }
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23