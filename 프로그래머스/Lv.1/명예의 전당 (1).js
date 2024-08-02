function solution(k, score) {
  const answer = [];
  let board = [-1];
  let announced = undefined;
  for (const s of score) {
    for (let j = 0; j < board.length && j < k; j++) {
      if (s >= board[j]) {
        board = [...board.slice(0, j), s, ...board.slice(j, k - 1)];
        break;
      }
    }
    announced = board.filter(el => el > -1);
    answer.push(announced[announced.length - 1]);
  }
  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); // [10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
console.log(solution(3, [100, 30, 40, 150, 300, 200, 200])); // [100, 30, 30, 40, 100, 150, 200]