function solution(N, stages) {
  const failRate = [];
  const answer = [];
  for (let i = 1; i <= N; i++) {
    failRate.push(stages.filter(x => x === i).length / stages.filter(x => x >= i).length || 0);
  }
  console.log(failRate);
  const sorted = [...failRate].sort((a, b) => b - a);
  for (let i = 0; i < N; i++) {
    let index = failRate.indexOf(sorted[i]);
    failRate[index] = -1;
    answer.push(index + 1);
  }
  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4, 1, 2, 3]
console.log(solution(3, [1, 2, 2])); // [2, 1, 3]