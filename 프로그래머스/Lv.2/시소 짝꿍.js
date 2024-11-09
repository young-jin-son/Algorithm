function solution(weights) {
  let answer = 0;
  const isPair = [1, 4 / 3, 2, 3 / 2];
  const obj = {};
  weights.sort((a, b) => b - a).forEach((w) => {
    isPair.forEach((i) => {
      if (obj[i * w]) {
        answer += obj[i * w];
      }
    });
    obj[w] = (obj[w] || 0) + 1;
  });
  return answer;
}

console.log(solution([100, 180, 360, 100, 270])); // 4