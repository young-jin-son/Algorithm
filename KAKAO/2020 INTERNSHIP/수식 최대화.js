function solution(expression) {
  let answer = 0;
  const expArr = [];
  let tmp = '';
  for (s of expression) {
    if (/^[+\-*]$/.test(s)) {
      expArr.push(tmp);
      tmp = '';
      expArr.push(s);
    } else {
      tmp += s;
    }
  }
  expArr.push(tmp);

  const priorities = [
    ['*', '+', '-'],
    ['*', '-', '+'],
    ['+', '*', '-'],
    ['+', '-', '*'],
    ['-', '*', '+'],
    ['-', '+', '*'],
  ];
  for (const priority of priorities) {
    const result = calculateWithPriority(expArr, priority);
    answer = Math.max(answer, result);
  }

  return answer;
}

function calculateWithPriority(expArr, priority) {
  let tmpExpArr = [...expArr];

  for (const op of priority) {
    while (tmpExpArr.includes(op)) {
      let result = 0;
      const opIndex = tmpExpArr.indexOf(op);
      const leftOperand = Number(tmpExpArr[opIndex - 1]);
      const rightOperand = Number(tmpExpArr[opIndex + 1]);

      switch (op) {
        case '*':
          result = leftOperand * rightOperand;
          break;
        case '+':
          result = leftOperand + rightOperand;
          break;
        case '-':
          result = leftOperand - rightOperand;
          break;
        default:
          break;
      }

      tmpExpArr.splice(opIndex - 1, 3, result.toString());
    }
  }

  return Math.abs(Number(tmpExpArr[0]));
}

console.log(solution("100-200*300-500+20"));
console.log(solution("50*6-3*2"));