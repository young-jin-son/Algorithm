function solution(wallpaper) {
  wallpaper = wallpaper.map(el => el.split(""));
  const rows = wallpaper.length;
  const cols = wallpaper[0].length;
  let [minX, minY, maxX, maxY] = [rows, cols, 0, 0];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (wallpaper[i][j] === "#") {
        minX = Math.min(minX, i);
        minY = Math.min(minY, j);
        maxX = Math.max(maxX, i);
        maxY = Math.max(maxY, j);
      }
    }
  }

  return [minX, minY, maxX + 1, maxY + 1];
}

console.log(solution([".#...", "..#..", "...#."])); // [0, 1, 3, 4]
console.log(solution(["..........", ".....#....", "......##..", "...##.....", "....#....."])); // [1, 3, 5, 8]
console.log(solution([".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."])); // [0, 0, 7, 9]
console.log(solution(["..", "#."])); // [1, 0, 2, 1]