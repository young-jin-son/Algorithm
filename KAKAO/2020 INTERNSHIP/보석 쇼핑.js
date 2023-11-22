function solution(gems) {
  const gemSet = new Set(gems);
  const answer = [1, gems.length];

  for (let i = 0; i < gems.length - gemSet.size + 1; i++) {
    const tmpSet = new Set();
    for (let j = i; j < gems.length; j++) {
      if (!tmpSet.has(gems[j])) {
        tmpSet.add(gems[j]);
        if (tmpSet.size === gemSet.size) {
          if (answer[1] - answer[0] > j - i) {
            [answer[0], answer[1]] = [i + 1, j + 1];
          }
          break;
        }
      }
    }
    if (tmpSet.size < gemSet.size) break;
  }
  return answer;
}

console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])); // [3,7]
console.log(solution(["AA", "AB", "AC", "AA", "AC"])); // [1,3]
console.log(solution(["XYZ", "XYZ", "XYZ"])); // [1,1]
console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"])); // [1,5]
console.log(solution(["A", "A", "A", "B", "B"])); // [3,4]
console.log(solution(["A"])); // [1,1]
console.log(solution(["A", "B", "B", "B", "B", "B", "B", "C", "B", "A"])); // [8,10]
