function solution(array, commands) {
  const answer = [];
  for (const [i, j, k] of commands) {
    const sliced = [...array].slice(i - 1, j).sort((a, b) => a - b);
    answer.push(sliced[k - 1]);
  }
  return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])); // [5, 6, 3]