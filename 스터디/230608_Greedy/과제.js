const fs = require('fs');
const path = (process.platform === 'linux') ? '/dev/stdin' : './test.txt';
const [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');
let homeworks = input.map(el => el.split(' ').map(Number)).sort((a, b) => (a[0] === b[0]) ? b[1] - a[1] : b[0] - a[0]); // 내림차순으로 정렬

// 첫 번째 값은 무조건 포함됨. 따라서 첫 번째 값을 day와 answer에 넣음
let day = homeworks[0][0] - 1;
let answer = homeworks[0][1];
// 끝난 과제인지 아닌지를 검사하기 위한 배열, 첫 번째 과제는 이미 끝냈기 때문에 1로 표시
const finished = Array(n).fill(0);
finished[0] = 1;

for (let i = 1; i < n && day > 0; i++) {
  if (homeworks[i][0] >= day) { // 현재 날짜보다 과제 마감일이 크거나 같을 경우에
    let max = 0;
    let maxIndex = 0;
    // 끝내지 않은 과제들 중 할 수 있는 최대값과 해당 값의 위치를 찾아냄
    for (let j = 0; j < n; j++) {
      if (homeworks[j][0] >= day && !finished[j] && homeworks[j][1] > max) {
        max = homeworks[j][1];
        maxIndex = j;
      }
    }
    // 최대 값을 결과에 더하고, 해당 index의 과제를 끝냈다고 표시
    answer += max;
    finished[maxIndex] = 1;
  } else { // 현재 날짜보다 과제 마감일이 작을 경우에 i를 감소시켜서 다음 차례에도 검사할 수 있도록 함
    i--;
  }
  day--;
}

console.log(answer);