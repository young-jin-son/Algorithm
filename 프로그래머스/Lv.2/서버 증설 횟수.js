function solution(players, m, k) {
  let answer = 0;
  const hours = 24;
  const servers = Array(hours).fill(0);

  players.forEach((p, i) => {
    if ((servers[i] + 1) * m <= p) {
      let added = Math.floor((p - servers[i] * m) / m);
      answer += added;
      for (let j = i; j < i + k && j < hours; j++) {
        servers[j] += added;
      }
    }
  });

  return answer;
}