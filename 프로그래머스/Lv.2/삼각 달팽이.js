function solution(n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(Array(i).fill(0));
  }

  const dirs = [[1, 0], [0, 1], [-1, -1]];
  let [x, y] = [-1, 0];
  let dirIdx = 0;
  let num = 1;

  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      x += dirs[dirIdx][0];
      y += dirs[dirIdx][1];
      answer[x][y] += num;
      num++;
    }
    dirIdx = (dirIdx + 1) % 3;
  }

  return answer.reduce((acc, cur) => [...acc, ...cur]);
}

console.log(solution(4)); // [1,2,9,3,10,8,4,5,6,7]