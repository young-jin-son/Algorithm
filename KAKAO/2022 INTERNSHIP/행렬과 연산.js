function solution(rc, operations) {
  let answer = rc.map(el => [...el]);
  for (const op of operations) {
    const tmp = Array.from({ length: rc.length }, () => Array.from({ length: rc[0].length }, () => 0));
    if (op === 'ShiftRow') {
      tmp[0] = answer[answer.length - 1];
      for (let i = 1; i < rc.length; i++) {
        tmp[i] = answer[i - 1];
      }
    } else if (op === 'Rotate') {
      for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < answer[0].length; j++) {
          if (i === 0) {
            if (j === 0) {
              tmp[i][j] = answer[i + 1][j];
            } else {
              tmp[i][j] = answer[i][j - 1];
            }
          } else if (i === answer.length - 1) {
            if (j === answer[0].length - 1) {
              tmp[i][j] = answer[i - 1][j];
            } else {
              tmp[i][j] = answer[i][j + 1];
            }
          } else {
            if (j === 0) {
              tmp[i][j] = answer[i + 1][j]
            } else if (j === answer[0].length - 1) {
              tmp[i][j] = answer[i - 1][j];
            } else {
              tmp[i][j] = answer[i][j];
            }
          }
        }
      }
    }
    answer = tmp;
  }
  return answer;
}

// const result = solution([[1, 2, 3], [4, 5, 6], [7, 8, 9]], ["Rotate", "ShiftRow"]);
// const result = solution([[8, 6, 3], [3, 3, 7], [8, 4, 9]], ["Rotate", "ShiftRow", "ShiftRow"]);
const result = solution([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]], ["ShiftRow", "Rotate", "ShiftRow", "Rotate"]);
console.log('result', result);