const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const n = +fs.readFileSync(path).toString().trim();

const sol = (num) => {
  const result = [];
  const prefix = (num === n) ? '' : '_'.repeat(4 * (n - num));
  if (!num) {
    result.push(`${prefix}"재귀함수가 뭔가요?"`);
    result.push(`${prefix}"재귀함수는 자기 자신을 호출하는 함수라네"`);
    result.push(`${prefix}라고 답변하였지.`);
    return result;
  }
  if (num === n) {
    result.push(`어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.`);
  }
  result.push(`${prefix}"재귀함수가 뭔가요?"`);
  result.push(`${prefix}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`);
  result.push(`${prefix}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`);
  result.push(`${prefix}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`);
  return result.concat(sol(num - 1), [`${prefix}라고 답변하였지.`]);
}

const answer = sol(n);
console.log(answer.join('\n'));