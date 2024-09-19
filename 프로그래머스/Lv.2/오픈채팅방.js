function solution(record) {
  record = record.map(el => el.split(" "));
  const nickname = {};
  const answer = [];

  for (const [command, id, nick] of record) {
    if (command === "Change" || command === "Enter") {
      nickname[id] = nick;
    }
  }

  for (const [command, id, nick] of record) {
    if (command === "Enter") {
      answer.push(`${nickname[id]}님이 들어왔습니다.`)
    } else if (command === "Leave") {
      answer.push(`${nickname[id]}님이 나갔습니다.`);
    }
  }

  return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"])); // ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
// console.log(solution()); // 
// console.log(solution()); // 
// console.log(solution()); // 