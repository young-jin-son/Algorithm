function solution(msg) {
  const answer = [];
  const dir = {};
  for (let i = 0; i < 26; i++) {
    dir[String.fromCharCode(65 + i)] = i + 1;
  }
  let cur = '';
  let newWord = '';
  for (let i = 0; i < msg.length; i++) {
    let j = i + 1;
    cur = '';
    while (j <= msg.length && dir[msg.slice(i, j)]) {
      cur = msg.slice(i, j);
      j++;
    }
    newWord = msg.slice(i, j);
    answer.push(dir[cur]);
    dir[newWord] = Object.keys(dir).length + 1;
    i = j - 2;
  }
  return answer;
}


console.log(solution("KAKAO")); // [11, 1, 27, 15]
console.log(solution("TOBEORNOTTOBEORTOBEORNOT")); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
console.log(solution("ABABABABABABABAB")); //	[1, 2, 27, 29, 28, 31, 30]