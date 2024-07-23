function solution(players, callings) {
  const answer = [...players];
  const indexMap = {};

  for (let i = 0; i < players.length; i++) {
    indexMap[players[i]] = i;
  }

  for (const call of callings) {
    const index = indexMap[call];
    const prevPlayer = answer[index - 1];

    answer[index - 1] = call;
    answer[index] = prevPlayer;

    indexMap[call] = index - 1;
    indexMap[prevPlayer] = index;
  }

  return answer;
}

console.log(solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"])); // ["mumu", "kai", "mine", "soe", "poe"]