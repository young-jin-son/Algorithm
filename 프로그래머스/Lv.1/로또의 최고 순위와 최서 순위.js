function solution(lottos, win_nums) {
  const zeroCount = lottos.filter(x => x === 0).length;
  const matchCount = win_nums.filter(x => lottos.includes(x)).length;
  const max = Math.min(7 - matchCount - zeroCount, 6);
  const min = Math.min(7 - matchCount, 6);
  return [max, min];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]
console.log(solution([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]));