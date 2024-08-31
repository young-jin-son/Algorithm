function solution(r1, r2) {
  let count = 0;

  for (let x = 1; x <= r2; x++) {
    let maxY = Math.floor(Math.sqrt(r2 * r2 - x * x));
    let minY = Math.ceil(Math.sqrt(r1 * r1 - x * x)) || 0;
    count += maxY - minY + 1;
  }

  return count * 4;
}


console.log(solution(1, 2)); // 12
console.log(solution(2, 3)); // 20 (16+4)
console.log(solution(3, 4)); // 24 (17+7)

console.log(solution(3, 7)); // 124
// 7이면 7*4+1
// 3이면 3*4+1
// (7 - 3 + 1) * 4