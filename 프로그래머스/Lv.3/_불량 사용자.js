function solution(user_id, banned_id) {
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

  console.log(banned);

  const answer = [];
  const dfs = (i, j) => {
    if (i === banned.length) {
      return;
    }

    if (j === banned[i].length) {
      return;
    }




  }

  dfs(0, 0);

  // 일단 모든 경우의 수를 다 만들고 배열에 저장. 각각을 set로 해서 중복을 제거하고, 길이가 banned와 같은 것만. 그리고 id로 정렬하던지.


  // return set.size;
}

console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"])); // 2
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"])); // 2
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"])); // 3
// console.log(solution()); // 