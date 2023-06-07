const fs = require('fs');
const path = (process.platform === 'linux') ? '/dev/stdin' : './test.txt';
const [n, ...words] = fs.readFileSync(path).toString().trim().split('\n');

const count = {};
words.forEach(word => {
  [...word].forEach((alphabet, i) => {
    if (!count[alphabet]) { // 값이 없으면 0으로 초기화
      count[alphabet] = 0;
    }
    // 가중치 없이 해당 값의 자릿수만 일단 계산
    count[alphabet] += 10 ** (word.length - i - 1);
  });
});

// 각 값의 자릿수 계산 결과를 내림차순으로 정렬 후 가중치를 곱하여 답을 구함
const answer = Object.values(count).sort((a, b) => b - a).reduce((acc, v, i) => acc + v * (9 - i), 0);

console.log(answer);
