function solution(answers) {
  const answer = [];
  const solve1 = [1, 2, 3, 4, 5];
  const solve2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const solve3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const matchCount = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === solve1[i % solve1.length]) {
      matchCount[0]++;
    }
    if (answers[i] === solve2[i % solve2.length]) {
      matchCount[1]++;
    }
    if (answers[i] === solve3[i % solve3.length]) {
      matchCount[2]++;
    }
  }

  const max = Math.max(...matchCount);
  for (let i = 0; i < matchCount.length; i++) {
    if (matchCount[i] === max) {
      answer.push(i + 1);
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]