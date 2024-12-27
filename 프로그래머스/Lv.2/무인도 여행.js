function solution(maps) {
  let answer = [];
  maps = maps.map(el => el.split("").map((x) => Number(x) || 0));
  const [n, m] = [maps.length, maps[0].length];
  const visited = Array.from({ length: maps.length }, () => Array.from({ length: maps[0].length }, () => false));

  const dfs = (x, y) => {
    if (x < 0 || y < 0 || x >= n || y >= m) return 0;
    if (!maps[x][y] || visited[x][y]) return 0;

    visited[x][y] = true;
    let sum = maps[x][y];
    sum += dfs(x - 1, y);
    sum += dfs(x + 1, y);
    sum += dfs(x, y - 1);
    sum += dfs(x, y + 1);

    return sum;
  }

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] && !visited[i][j]) {
        answer.push(dfs(i, j));
      }
    }
  }

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}