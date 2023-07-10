const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let [n, k] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

let answer = 0;
let oneCount = n.toString(2).split('').filter(v => v === '1').length;

while (oneCount > k) { // n의 2진수 표현에서 1의 개수가 k보다 많은 경우 실행
  // n을 1씩 증가시킬 때마다 물병을 하나씩 추가하는 것이므로 answer도 하나씩 증가시킴
  n++;
  answer++;
  let [num, count] = [n, 0];

  while (num > 0) {
    if (num & 1) { // num의 가장 오른쪽 비트가 1이면 count 증가
      count++;
    }
    num >>= 1; // num을 오른쪽으로 한 비트씩 이동. 이렇게 해서 1의 개수를 셈
  }
  oneCount = count;
}

console.log(answer);
