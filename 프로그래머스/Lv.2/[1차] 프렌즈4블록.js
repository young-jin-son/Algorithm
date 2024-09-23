function solution(m, n, board) {
  let isContinue = true;
  board = board.map(el => el.split(""));

  while (isContinue) {
    isContinue = false;
    const index = [];

    // 지울 블록 찾기
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j <= n - 1; j++) {
        if (board[i][j] !== " " && board[i][j] === board[i + 1][j] && board[i][j] === board[i][j + 1] && board[i][j] === board[i + 1][j + 1]) {
          isContinue = true;
          index.push([i, j]);
        }
      }
    }

    // 블록 지우기
    for (const [x, y] of index) {
      [board[x][y], board[x + 1][y], board[x][y + 1], board[x + 1][y + 1]] = [" ", " ", " ", " "]
    }

    // 블록 내리기
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        if (board[i][j] === " ") {
          let prevI = i - 1;
          while (prevI >= 0 && board[prevI][j] === " ") {
            prevI--;
          }
          if (prevI >= 0) {
            board[i][j] = board[prevI][j];
            board[prevI][j] = " "
          }
        }
      }
    }
  }

  return board.map(el => el.filter(x => x === " ").length).reduce((a, b) => a + b, 0);
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"])); // 14
console.log(solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])); // 15