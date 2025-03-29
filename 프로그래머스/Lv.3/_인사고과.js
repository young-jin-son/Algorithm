function solution(scores) {
  const [my_s1, my_s2] = scores[0];
  let answer = 1;
  let prev = 0;

  scores.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

  for (const [s1, s2] of scores) {
    if (my_s1 < s1 && my_s2 < s2) return -1;

    if (prev <= s2) {
      if (my_s1 + my_s2 < s1 + s2) answer++;
      prev = s2;
    }
  }

  return answer;
}