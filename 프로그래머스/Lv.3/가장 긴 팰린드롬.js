function solution(s) {
  s = [...s];
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    let [left, right] = [i - 1, i + 1];
    while (s[left] === s[right] && left >= 0 && right < s.length) {
      left -= 1;
      right += 1;
    }
    answer = Math.max(answer, 2 * (i - left) - 1);

    [left, right] = [i, i + 1];
    while (s[left] === s[right] && left >= 0 && right < s.length) {
      left -= 1;
      right += 1;
    }
    answer = Math.max(answer, 2 * (i - left));
  }

  return answer;
}