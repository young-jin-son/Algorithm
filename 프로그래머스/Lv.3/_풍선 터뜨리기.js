function solution(a) {
  let answer = 1;
  let [start, end] = [0, a.length - 1];
  let [x, y] = [a[start], a[end]];

  while (start < end) {
    if (x > y) {
      if (x > a[++start]) {
        answer++;
        x = a[start];
      }
    }
    if (x < y) {
      if (y > a[--end]) {
        answer++;
        y = a[end];
      }
    }
  }

  return answer;
}
