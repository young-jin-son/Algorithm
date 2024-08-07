function solution(k, m, score) {
  // const sorted = score.filter(x => x > 0).sort((a, b) => b - a);
  // if (sorted.length < m) return 0;
  // const boxes = [];
  // for (let i = 0; i + m <= sorted.length; i += m) {
  //   boxes.push(sorted.slice(i, i + m));
  // }
  // return boxes.map(el => el[m - 1] * m).reduce((a, b) => a + b);
  const sorted = score.filter(x => x > 0).sort((a, b) => b - a);
  let answer = 0;
  for (let i = m - 1; i < sorted.length; i += m) {
    answer += sorted[i] * m;
  }
  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33
console.log(solution(3, 4, [1, 2, 1, 1])); // 7