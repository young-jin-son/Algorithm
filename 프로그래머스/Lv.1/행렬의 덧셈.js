function solution(arr1, arr2) {
  const answer = [];
  const row = arr1.length;
  const col = arr1[0].length;
  for (let i = 0; i < row; i++) {
    const tmp = [];
    for (let j = 0; j < col; j++) {
      tmp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(tmp);
  }
  return answer;
}