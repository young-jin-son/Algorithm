function solution(lottos, win_nums) {
  const zeroCount = lottos.filter(x => x === 0).length;
  const matchCount = lottos.filter(num => win_nums.includes(num)).length;
  const max = 7 - (matchCount + zeroCount);
  const min = Math.min(7 - matchCount, 6);
  return [max, min];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]