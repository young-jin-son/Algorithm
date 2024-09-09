function solution(dirs) {
  const directions = { "U": [0, 1], "D": [0, -1], "R": [1, 0], "L": [-1, 0] };
  const paths = {};
  let [x, y] = [0, 0];
  let answer = 0;

  for (const d of dirs) {
    let [nextX, nextY] = [x + directions[d][0], y + directions[d][1]];
    if (nextX < -5 || nextX > 5 || nextY < -5 || nextY > 5) { continue; }

    const path = String(x) + String(y) + String(nextX) + String(nextY);
    const reversePath = String(nextX) + String(nextY) + String(x) + String(y);

    if (!paths[path] && !paths[reversePath]) {
      paths[path] = 1;
      answer++;
    }

    [x, y] = [nextX, nextY];
  }

  return answer;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7 