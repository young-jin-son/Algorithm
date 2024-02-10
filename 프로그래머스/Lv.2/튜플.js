function solution(s) {
  const arr = s
    .slice(2, -2)
    .split('},{')
    .sort((a, b) => a.length - b.length)
    .map(el => el.split(',').map(Number));
  const answer = [];
  for (const set of arr) {
    for (const el of set) {
      if (!answer.includes(el)) answer.push(el);
    }
  }
  return answer;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); // [2, 1, 3, 4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); // [2, 1, 3, 4]
console.log(solution("{{20,111},{111}}")); // [111, 20];