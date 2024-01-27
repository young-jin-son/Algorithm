function solution(s) {
  let cnt = 0;
  let deletedCnt = 0;

  while (s !== '1') {
    cnt++;
    deletedCnt += [...s].filter(c => c === '0').length;
    s = [...s].filter(c => c !== '0').join('');
    s = s.length.toString(2);
  }

  return [cnt, deletedCnt];
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));