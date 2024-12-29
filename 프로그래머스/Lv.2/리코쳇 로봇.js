function solution(board) {
    const [n, m] = [board.length, board[0].length];
    const block_row = Array.from({ length: n }, () => []);
    const block_col = Array.from({ length: m }, () => []);
    let [rx, ry, gx, gy] = [-1, -1, -1, -1];

    // 시작 위치, 목표 위치, 장애물 위치 찾기
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === "R") [rx, ry] = [i, j];
            if (board[i][j] === "G") [gx, gy] = [i, j];
            if (board[i][j] === "D") {
                block_row[i].push(j);
                block_col[j].push(i);
            }
        }
    }

    const queue = [[rx, ry, 0]]; // [x, y, 이동 횟수]
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    visited[rx][ry] = true;

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    while (queue.length) {
        const [x, y, cost] = queue.shift();

        if (x === gx && y === gy) return cost;

        for (const [dx, dy] of directions) {
            let [nx, ny] = [x, y];

            // 다음 장애물까지 이동
            if (dx === 1) {
                const col = block_col[ny];
                const idx = col.findIndex(pos => pos > nx);
                nx = idx !== -1 ? col[idx] - 1 : n - 1;
            } else if (dx === -1) {
                const col = block_col[ny];
                const idx = col.slice().reverse().findIndex(pos => pos < nx);
                nx = idx !== -1 ? col[col.length - 1 - idx] + 1 : 0;
            } else if (dy === 1) {
                const row = block_row[nx];
                const idx = row.findIndex(pos => pos > ny);
                ny = idx !== -1 ? row[idx] - 1 : m - 1;
            } else if (dy === -1) {
                const row = block_row[nx];
                const idx = row.slice().reverse().findIndex(pos => pos < ny);
                ny = idx !== -1 ? row[row.length - 1 - idx] + 1 : 0;
            }

            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, cost + 1]);
            }
        }
    }

    return -1;
}
