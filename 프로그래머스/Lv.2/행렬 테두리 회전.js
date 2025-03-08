function getArray(rows, columns) {
  let v = 1;
  const arr = Array.from({ length: rows + 1 }, () => Array.from({ length: columns + 1 }, () => 0));
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      arr[i][j] = v++;
    }
  }

  return arr;
}

function solution(rows, columns, queries) {
  const answer = [];
  const arr = getArray(rows, columns);

  const rotateAndGetMin = (query) => {
    const [x1, y1, x2, y2] = query;
    const stack = [];

    for (let i = y1; i < y2; i++) stack.push(arr[x1][i]);
    for (let i = x1; i < x2; i++) stack.push(arr[i][y2]);
    for (let i = y2; i > y1; i--) stack.push(arr[x2][i]);
    for (let i = x2; i > x1; i--) stack.push(arr[i][y1]);

    const min = Math.min(...stack);

    for (let i = x1; i < x2; i++) arr[i][y1] = stack.pop();
    for (let i = y1; i < y2; i++) arr[x2][i] = stack.pop();
    for (let i = x2; i > x1; i--) arr[i][y2] = stack.pop();
    for (let i = y2; i > y1; i--) arr[x1][i] = stack.pop();

    return min;
  }

  for (const query of queries) {
    answer.push(rotateAndGetMin(query));
  }

  return answer;
}