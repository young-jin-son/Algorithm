function solution(storage, requests) {
    storage = storage.map(el => el.split(""));
    const n = storage.length;
    const m = storage[0].length;
    let answer = n * m;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (const r of requests) {
        if (r.length === 2) {
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    if (storage[i][j] === r[0]) {
                        storage[i][j] = 0;
                        answer--;
                    }
                }
            }
        } else {
            const tmp = [];
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    if (storage[i][j] === r) {
                        const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));
                        const stack = [];
                        stack.push([i, j]);

                        while (stack.length) {
                            const [x, y] = stack.pop();

                            if (x === 0 || x === n - 1 || y === 0 || y === m - 1) {
                                tmp.push([i, j]);
                                answer--;
                                break;
                            }

                            visited[x][y] = true;

                            for (const [dx, dy] of dirs) {
                                const [nx, ny] = [x + dx, y + dy];
                                if (nx >= 0 && nx < n && ny >= 0 && ny < m &&
                                    storage[nx][ny] === 0 && !visited[nx][ny]) {
                                    stack.push([nx, ny]);
                                }
                            }
                        }
                    }
                }
            }

            for (const [x, y] of tmp) storage[x][y] = 0;
        }
    }

    return answer;
}