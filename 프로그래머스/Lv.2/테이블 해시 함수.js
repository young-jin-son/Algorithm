function solution(data, col, row_begin, row_end) {
  const s = [];
  data.sort((a, b) => a[col - 1] - b[col - 1] || b[0] - a[0]);
  for (let i = row_begin - 1; i < row_end; i++) {
    s.push(data[i].reduce((acc, cur) => acc + cur % (i + 1), 0));
  }
  return s.reduce((acc, cur) => acc ^ cur, 0);
}