function solution(routes) {
  let answer = 1;
  routes.sort((a, b) => (a[0] === b[0]) ? a[1] - b[1] : a[0] - b[0]);
  let start = routes[0][0];
  let end = routes[0][1];

  for (let i = 1; i < routes.length; i++) {
    const [newStart, newEnd] = routes[i];
    if (end >= newStart) {
      start = newStart;
      end = Math.min(end, newEnd);
    } else {
      start = newStart;
      end = newEnd;
      answer++;
    }
  }

  return answer;
}

console.log(solution([[-20, -15], [-14, -5], [-18, -13], [-5, -3]])) // 2
console.log(solution([[-10, -8], [-5, -3], [-4, -3]])); // 2