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

/**
 * mumu: 5
 * soe: 4
 * poe: 3
 * kai: 2 + 2 => 4
 * mine: 1 + 2 => 3
 */

// mumu > kai > soe > mine > poe