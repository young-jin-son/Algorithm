function solution(gems) {
  const cnt = new Set(gems).size;
  const gemMap = new Map();
  let answer = [1, gems.length];
  gems.forEach((gem, i) => {
    gemMap.delete(gem);
    gemMap.set(gem, i); // 보석의 위치를 저장함
    if (gemMap.size === cnt) {
      const cand = [gemMap.values().next().value + 1, i + 1];
      answer = answer[1] - answer[0] > cand[1] - cand[0] ? cand : answer;
    }
  })
  return answer;
}

console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])); // [3,7]
console.log(solution(["AA", "AB", "AC", "AA", "AC"])); // [1,3]
console.log(solution(["XYZ", "XYZ", "XYZ"])); // [1,1]
console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"])); // [1,5]
console.log(solution(["A", "A", "A", "B", "B"])); // [3,4]
console.log(solution(["A"])); // [1,1]
console.log(solution(["A", "B", "B", "B", "B", "B", "B", "C", "B", "A"])); // [8,10]
