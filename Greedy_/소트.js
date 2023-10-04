const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const arr = fs.readFileSync(path)
  .toString()
  .trim()
  .split(/\s/)
  .slice(1)
  .map(Number);
// numCount 배열에 각 숫자의 개수를 넣어줌
const numCount = Array(1002).fill(0);
for (const num of arr) {
  numCount[num] += 1;
}

const result = [];
let cur = 0;

while (numCount.reduce((a, b) => a + b, 0) > 0) { // numCount가 모두 0일때까지
  let flag = 1;

  if (numCount[cur] && numCount[cur + 1]) { // cur과 cur+1 이 모두 있을 경우
    for (let x = cur + 2; x <= 1000; x++) { // cur+2 이상의 수가 있는지 찾음
      if (numCount[x]) { // cur+2 이상 숫자가 있으면
        result.push(...Array(numCount[cur]).fill(cur)); // cur을 result에 모두 채우고
        numCount[cur] = 0; // cur의 numCount를 0으로 초기화
        result.push(x); // cur+2 이상의 수인 x를 result에 하나 넣고
        numCount[x]--; // x의 numCount를 하나 줄임
        flag = 0;
        break;
      }
    }

    if (flag) { // flag가 1이면 cur+2 이상 숫자가 없다는 뜻
      result.push(...Array(numCount[cur + 1]).fill(cur + 1)); // cur+1 을 모두 result에 넣음
      numCount[cur + 1] = 0;
      result.push(...Array(numCount[cur]).fill(cur)); // cur을 모두 result에 넣음
      numCount[cur] = 0;
    }
  } else { // cur이 없거나 cur+1 이 없거나 둘 다 없거나
    result.push(...Array(numCount[cur]).fill(cur));
    numCount[cur] = 0;
  }
  cur++;
}

console.log(result.join(' '));
