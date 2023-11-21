// function solution(n, k, cmd) {
//   const answer = Array.from({ length: n }, () => 'O');
//   let cur = k;
//   const deleteHistory = [];

//   const moveDown = (x) => {
//     let cnt = 0;
//     for (let i = cur + 1; cnt < x; i++) {
//       if (answer[i] === 'O') cnt++;
//       cur++;
//     }
//   }

//   const moveUp = (x) => {
//     let cnt = 0;
//     for (let i = cur - 1; cnt < x; i--) {
//       if (answer[i] === 'O') cnt++;
//       cur--;
//     }
//   }

//   const deleteCur = () => {
//     answer[cur] = 'X';
//     deleteHistory.push(cur);
//     if (cur === n - 1) {
//       cur = answer.join('').lastIndexOf('O');
//     } else {
//       cur = answer.join('').indexOf('O', cur);
//     }
//   }

//   const revert = () => {
//     answer[deleteHistory.pop()] = 'O';
//   }

//   for (let i = 0; i < cmd.length; i++) {
//     const [type, x] = cmd[i].split(' ');
//     if (type === 'D') {
//       moveDown(x);
//     } else if (type === 'U') {
//       moveUp(x);
//     } else if (type === 'C') {
//       deleteCur();
//     } else if (type === 'Z') {
//       revert();
//     }
//   }
//   return answer.join('');
// }


// function solution(n, k, cmd) {
//   let answer = 'O'.repeat(n);
//   let cur = k;
//   const deleteHistory = [];

//   const moveDown = (x) => {
//     let cnt = 0;
//     for (let i = cur + 1; cnt < x; i++) {
//       if (answer[i] === 'O') cnt++;
//       cur++;
//     }
//   }

//   const moveUp = (x) => {
//     let cnt = 0;
//     for (let i = cur - 1; cnt < x; i--) {
//       if (answer[i] === 'O') cnt++;
//       cur--;
//     }
//   }

//   const deleteCur = () => {
//     const answerArr = [...answer];
//     answerArr[cur] = 'X';
//     answer = answerArr.join('');
//     deleteHistory.push(cur);
//     if (cur === n - 1) {
//       cur = answer.lastIndexOf('O');
//     } else {
//       cur = answer.indexOf('O', cur);
//     }
//   }

//   const revert = () => {
//     const answerArr = [...answer];
//     answerArr[deleteHistory.pop()] = 'O';
//     answer = answerArr.join('');
//   }

//   for (let i = 0; i < cmd.length; i++) {
//     const [type, x] = cmd[i].split(' ');
//     if (type === 'D') {
//       moveDown(x);
//     } else if (type === 'U') {
//       moveUp(x);
//     } else if (type === 'C') {
//       deleteCur();
//     } else if (type === 'Z') {
//       revert();
//     }
//   }
//   return answer;
// }

function solution(n, k, cmd) {

}

console.log(solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"]));
// console.log(solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"]));