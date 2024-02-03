function solution(people, limit) {
  let cnt = people.length;
  const sorted = people.sort((a, b) => a - b);
  let i = 0;
  let j = sorted.length - 1;
  while (i < j) {
    if (sorted[i] + sorted[j] <= limit) {
      i++;
      cnt--;
    }
    j--;
  }
  return cnt;
}