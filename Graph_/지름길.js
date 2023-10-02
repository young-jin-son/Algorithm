const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const [n, d] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(el => el.split(' ').map(Number));
const obj = { 0: 0 };

for (let i = 0; i < n; i++) {
  const [start, end, cost] = arr[i];
  if (end > d) continue; // 지름길의 도착 위치가 고속도로 길이보다 크면 추가하지 않음
  if (obj[start] !== undefined) { // 지름길의 시작 위치가 존재할 경우
    if (obj[end] !== undefined) {
      obj[end] = Math.min(obj[end], obj[start] + cost);
    } else {
      obj[end] = obj[start] + Math.min(cost, end - start);
    }
  } else { // 지름길의 시작 위치가 존재하지 않을 경우
    let tmp = start;
    for (const prev in obj) {
      tmp = Math.min(obj[prev] + start - prev, tmp)
    }
    obj[start] = tmp;
    i--;
  }
}

if (!obj[d]) {
  let tmp = d;
  for (const prev in obj) {
    tmp = Math.min(obj[prev] + d - prev, tmp);
  }
  obj[d] = tmp;
}

console.log(obj[d]);
