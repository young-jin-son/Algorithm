function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  const queue = [[0, 0, 1]];
  maps[0][0] = 0;

  let minCost = Infinity;

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();

    if (count >= minCost) continue;

    if (x === rows - 1 && y === cols - 1) {
      minCost = Math.min(minCost, count);
      continue;
    }

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (newX >= 0 && newY >= 0 && newX < rows && newY < cols && maps[newX][newY] === 1) {
        maps[newX][newY] = 0;
        queue.push([newX, newY, count + 1]);
      }
    }
  }

  return minCost === Infinity ? -1 : minCost;
}

console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]])); // 11
console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]])); // 1