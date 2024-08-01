function solution(keymap, targets) {
  const answer = [];
  const keys = {};

  for (let i = 0; i < keymap.length; i++) {
    for (let j = 0; j < keymap[i].length; j++) {
      const key = keymap[i][j];
      keys[key] = Math.min(keys[key], j + 1) || j + 1;
    }
  }

  let tmp = 0;
  for (let i = 0; i < targets.length; i++) {
    tmp = 0;
    for (let j = 0; j < targets[i].length; j++) {
      if (!keys[targets[i][j]]) {
        tmp = 0;
        break;
      }
      tmp += keys[targets[i][j]];
    }
    answer.push(tmp || -1);
  }

  return answer;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4]
console.log(solution(["AA"], ["B"])); // [-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4, 6]