function solution(sizes) {
  let [w, h] = [0, 0];
  for (const size of sizes) {
    const [x, y] = size.sort((a, b) => a - b);
    w = Math.max(w, x);
    h = Math.max(h, y);
  }
  return w * h;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]])); // 4000
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])); // 120
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])); // 133