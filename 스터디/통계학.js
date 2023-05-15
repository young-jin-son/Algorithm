// const input = ['5', '1', '3', '8', '-2', '2'];
// const input = ['1', '4000'];
// const input = ['5', '-1', '-2', '-3', '-1', '-2'];
// const input = ['3', '0', '0', '-1'];

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1).map(v => Number(v));
let answer = '';

//산술평균: n개의 수들의 합을 n으로 나눈 값, 소수점 반올림 할 것
const sum = arr.reduce((a, b) => a + b, 0);
const avg = sum / n;
answer += Math.round(avg) + '\n';

//중앙값: n개의 수들을 증가하는 순서로 나열했을 경우 중앙에 위치하는 값
const median = arr.sort((a, b) => a - b)[Math.floor(n / 2)];
answer += median + '\n';

// 최빈값: 가장 자주 나오는 값. 여러 개일 경우 최빈값 중 두 번째로 작은 값
if (arr.length <= 1) { // 길이가 1 이하면 젤 앞에꺼
  answer += arr[0] + '\n';
} else { // 아니면
  const freqObj = {}; // 객체 만들고
  arr.forEach(v => { // 각 값의 빈도수 count
    freqObj[v] ? freqObj[v]++ : freqObj[v] = 1;
  });

  const freqArr = []; // 배열 만들고
  for (let key in freqObj) { // 객체 정보를 그대로 배열에 저장. 정렬하기 위해
    freqArr.push([key, freqObj[key]]);
  }

  freqArr.sort((a, b) => { // 정렬하는데
    if (a[1] === b[1]) { // 빈도수가 같은 것끼리는
      return a[0] - b[0]; // 값 기준 오름차순
    }
    return b[1] - a[1]; // 빈도수 다르면 빈도수 기준 내림차순
  });

  answer += (freqArr[0][1] === freqArr[1][1]) ? (freqArr[1][0] + '\n') : (freqArr[0][0] + '\n'); // 최빈값 여러 개면 두 번째 작은 값, 하나면 젤 앞의 값
}

// 범위
const scope = Math.abs(Math.max(...arr) - Math.min(...arr));
answer += scope;

console.log(answer);