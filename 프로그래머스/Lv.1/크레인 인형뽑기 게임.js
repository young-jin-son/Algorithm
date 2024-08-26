function solution(board, moves) {
  const stack = [];
  let count = 0;
  for (const move of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1]) {
        if (stack.at(-1) === board[i][move - 1]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(board[i][move - 1]);
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  }
  return count;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4])); // 4