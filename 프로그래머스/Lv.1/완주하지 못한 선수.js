function solution(participant, completion) {
  const completed = {};
  let unfinished = undefined;

  for (const player of completion) {
    completed[player] = (completed[player] || 0) + 1;
  }

  for (const player of participant) {
    if (completed[player]) {
      completed[player]--;
    } else {
      unfinished = player;
      break;
    }
  }

  return unfinished;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])); // "vinko"
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])); // "mislav"