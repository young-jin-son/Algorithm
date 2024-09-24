function solution(user_id, banned_id) {
  const answer = new Set();
  const banned = [];

  for (const b of banned_id) {
    const users = [];
    for (const [i, u] of user_id.entries()) {
      if (b.length === u.length) {
        let isBanned = 1;
        for (let j = 0; j < b.length; j++) {
          if (b[j] !== "*" && b[j] !== u[j]) {
            isBanned = 0;
            break;
          }
        }
        if (isBanned) {
          users.push(i);
        }
      }
    }
    banned.push(users);
  }

  const dfs = (i, visited) => {
    if (i === banned.length) {
      answer.add(visited.sort((a, b) => a - b).join(""));
      return;
    }

    for (let j = 0; j < banned[i].length; j++) {
      if (visited.indexOf(banned[i][j]) < 0) {
        dfs(i + 1, [...visited, banned[i][j]]);
      }
    }
  }

  for (const n of banned[0]) {
    dfs(1, [n]);
  }

  return answer.size;
}

console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"])); // 2
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"])); // 2
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"])); // 3