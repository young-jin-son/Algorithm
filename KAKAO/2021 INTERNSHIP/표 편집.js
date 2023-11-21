function solution(n, k, cmd) {
  const status = Array.from({ length: n }, () => 'O');
  let cur = k;
  const deleteHistory = [];

  const moveDown = (x) => {
    let cnt = 0;
    for (let i = cur + 1; cnt < x; i++) {
      if (status[i] === 'O') cnt++;
      cur++;
    }
  }

  const moveUp = (x) => {
    let cnt = 0;
    for (let i = cur - 1; cnt < x; i--) {
      if (status[i] === 'O') cnt++;
      cur--;
    }
  }

  const deleteCur = () => {
    status[cur] = 'X';
    deleteHistory.push(cur);
    if (cur === n - 1) {
      cur = status.join('').lastIndexOf('O');
    } else {
      cur = status.join('').indexOf('O', cur);
    }
  }

  const revert = () => {
    status[deleteHistory.pop()] = 'O';
  }

  for (let i = 0; i < cmd.length; i++) {
    const [type, x] = cmd[i].split(' ');
    if (type === 'D') {
      moveDown(x);
    } else if (type === 'U') {
      moveUp(x);
    } else if (type === 'C') {
      deleteCur();
    } else if (type === 'Z') {
      revert();
    }
  }
  return status.join('');
}

console.log(solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"]));
// console.log(solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"]));