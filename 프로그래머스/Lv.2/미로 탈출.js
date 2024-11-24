function solution(maps) {
  let answer = 0;
  maps = maps.map(el => el.split(""));
  const [n, m] = [maps.length, maps[0].length];

  function bfs(cur_x, cur_y, dest) {
    const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    const q = [[0, cur_x, cur_y]];
    const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
    visited[cur_x][cur_y] = 1;
    let i = 0;

    while (i < q.length) {
      const [c, dq_x, dq_y] = q[i++];

      for (const [dx, dy] of dirs) {
        let [next_x, next_y] = [dq_x + dx, dq_y + dy];
        if (next_x >= 0 && next_y >= 0 && next_x <= n - 1 && next_y <= m - 1 && !visited[next_x][next_y]) {
          let next = maps[next_x][next_y];
          if (next === dest) return c + 1;
          if (next !== "X") {
            q.push([c + 1, next_x, next_y]);
            visited[next_x][next_y] = 1;
          }
        }
      }
    }
  }

  // 시작점 -> 레버
  let [s_x, s_y] = [0, 0];
  let s_found = false;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "S") {
        [s_x, s_y] = [i, j];
        s_found = true;
        break;
      }
      if (s_found) break;
    }
  }
  answer += bfs(s_x, s_y, "L");

  // 레버 -> 문
  let [l_x, l_y] = [0, 0];
  let l_found = false;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "L") {
        [l_x, l_y] = [i, j];
        l_found = true;
        break;
      }
      if (l_found) break;
    }
  }
  answer += bfs(l_x, l_y, "E");

  return answer || -1;
}