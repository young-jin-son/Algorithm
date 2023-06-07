const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt'
const input = fs.readFileSync(path).toString().trim().split('\n');

const n = +input[0];
const from = input[1].split('').map(Number);
const to = input[2].split('').map(Number);

// a와 b가 같은지 검사하는 함수
const isMatch = (a, b) => {
  for (let i = 0; i < n; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// idx번째 스위치를 눌렀을 때 상태를 바꾸는 함수
const toggleSwitch = (idx, bulbs) => {
  if (idx > 0) {
    bulbs[idx - 1] = bulbs[idx - 1] ? 0 : 1;
  }
  bulbs[idx] = bulbs[idx] ? 0 : 1;
  if (idx < n - 1) {
    bulbs[idx + 1] = bulbs[idx + 1] ? 0 : 1;
  }
}

// 스위치를 최소로 누르는 횟수를 구하는 함수
const getMinPress = (firstPressed) => {
  const tmp = [...from];
  let count = 0;
  if (firstPressed) {// 첫 번째 스위치를 누르는 경우
    toggleSwitch(0, tmp);
    count++;
  }
  for (let i = 1; i < n; i++) { // 두 번째 스위치부터 반복하면서
    if (tmp[i - 1] != to[i - 1]) { // 만약 i-1번째의 값이 최종 결과와 다르다면 i번째 스위치를 누름
      toggleSwitch(i, tmp);
      count++;
    }
  }
  return isMatch(tmp, to) ? count : Number.MAX_SAFE_INTEGER;
}

const minPress = Math.min(getMinPress(true), getMinPress(false));
const result = (minPress === Number.MAX_SAFE_INTEGER) ? -1 : minPress;
console.log(result);