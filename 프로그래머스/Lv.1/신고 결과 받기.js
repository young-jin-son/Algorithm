function solution(id_list, report, k) {
  const answer = Array(id_list.length).fill(0);
  const reported = {};
  const users = {};
  id_list.forEach((id, index) => users[id] = index);

  for (let i = 0; i < report.length; i++) {
    const [from, to] = report[i].split(" ");
    if (!reported[to]) {
      reported[to] = new Set();
    }
    reported[to].add(from);
  }

  for (const get in reported) {
    if (reported[get].size >= k) {
      for (const give of reported[get]) {
        answer[users[give]]++;
      }
    }
  }

  return answer;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2)); // [2, 1 ,1, 0]
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)); // [0, 0]