const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [N, d, k, c, ...arr] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(/\s/g)
  .map(Number);

const sushiCount = new Array(d + 1).fill(0); // 각 초밥 번호의 개수를 저장
let tmp = 0;

// 처음 연속된 k개의 초밥 종류 세기
for (let i = 0; i < k; i++) {
  if (sushiCount[arr[i]] === 0) {
    tmp++;
  }
  sushiCount[arr[i]]++;
}

let answer = tmp;

for (let i = 0; i < N; i++) {
  // i번째 초밥 먹은 흔적 지우기
  sushiCount[arr[i]]--;
  if (sushiCount[arr[i]] === 0) {
    tmp--;
  }

  // (i+k)%N번째 초밥 먹은 흔적 추가
  const nextSushi = arr[(i + k) % N];
  if (sushiCount[nextSushi] === 0) {
    tmp++;
  }
  sushiCount[nextSushi]++;

  // 쿠폰 초밥(c)이 포함된 경우, 한 가지 종류 추가
  if (sushiCount[c] === 0) {
    answer = Math.max(answer, tmp + 1);
  } else {
    answer = Math.max(answer, tmp);
  }
}

console.log(answer);