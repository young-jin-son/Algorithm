function solution(operations) {
  let queue = [];
  let left = 0;
  let right = 0;

  for (const [cmd, num] of operations.map(el => el.split(' '))) {
    if (cmd === 'I') {
      if (left === right) {
        queue[right] = Number(num);
      } else {
        let flag = false;
        for (let i = left; i < right + 1; i++) {
          if (Number(num) < queue[i]) {
            const leftSub = queue.slice(0, i);
            const rightSub = queue.slice(i);
            queue = [...leftSub, Number(num), ...rightSub];
            flag = true;
            break;
          }
        }
        if (!flag) queue[right] = Number(num);
      }
      right++;
    } else if (num === '1' && left < right) {
      right--;
    } else if (num === '-1' && left < right) {
      left++;
    }
  }

  return (left < right) ? [queue[right - 1], queue[left]] : [0, 0];
}

console.log(solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])); // [0, 0]
console.log(solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"])); // [333, 45]