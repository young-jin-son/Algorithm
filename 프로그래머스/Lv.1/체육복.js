function solution(n, lost, reserve) {
  const students = Array(n).fill(0);
  for (const r of reserve) {
    students[r - 1]++;
  }
  for (const l of lost) {
    students[l - 1]--;
  }

  for (let i = 0; i < n; i++) {
    if (students[i] < 0) {
      if (students[i - 1] > 0) {
        students[i]++;
        students[i - 1]--;
      } else if (students[i + 1] > 0) {
        students[i]++;
        students[i + 1]--;
      }
    }
  }

  return students.filter(x => x >= 0).length;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
console.log(solution(5, [4, 2], [3, 5])); // 5
console.log(solution(5, [1, 2], [2, 3])); // 4