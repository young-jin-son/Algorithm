function solution(user_id, banned_id) {
  const banned = [];

  for (const b of banned_id) {
    const users = [];
    for (const u of user_id) {
      if (b.length === u.length) {
        let isBanned = 1;
        for (let i = 0; i < b.length; i++) {
          if (b[i] !== "*" && b[i] !== u[i]) {
            isBanned = 0;
            break;
          }
        }
        if (isBanned) {
          users.push(u);
        }
      }
    }
    banned.push(users);
  }

  // let count = 0;
  const set = new Set();
  const dfs = (i, selected) => {
    // if (i )
  }

  dfs(0, []);

  return set.size;
}

console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"])); // 2
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"])); // 2
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"])); // 3
// console.log(solution()); // 