function solution(board) {
    const [n, m] = [board.length, board[0].length];
    var answer = 0;
    const blocked = {};
    let [rx, ry] = [];
    let [gx, gy] = [];
    for (let i = 0; i < n; i++) {
        blocked[i] = [];
        for (let j = 0; j < m; j++) {
            if (board[i][j] === "R") [rx, ry] = [i, j];
            if (board[i][j] === "G") [gx, gy] = [i, j];
            if (board[i][j] === "D") blocked[i].push(j);
        }
    }

    if (gx > 0 && gx < n - 1 &&
        gy > 0 && gy < m - 1 &&
        board[gx - 1][gy] !== "." && board[gx + 1][gy] !== "." &&
        board[gx][gy - 1] !== "." && board[gx][gy + 1] !== ".") {
        return -1;
    }

    console.log(gx, gy)
    console.log(blocked)

    return answer;
}