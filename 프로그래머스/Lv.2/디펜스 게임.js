function solution(n, k, enemy) {
  if (k >= enemy.length) return enemy.length;

  let answer = k;
  let enemyIdx = k;
  const mujuk = enemy.slice(0, k).sort((a, b) => a - b);

  const binaryInsert = (arr, value) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === value) {
        left = mid;
        break;
      } else if (arr[mid] < value) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    arr.splice(left, 0, value);
  };

  while (n > 0 && answer < enemy.length) {
    let nextEnemy = enemy[enemyIdx++];

    if (nextEnemy <= mujuk[0]) {
      n -= nextEnemy;
    } else {
      n -= mujuk.shift();
      binaryInsert(mujuk, nextEnemy);
    }
    answer += 1;
  }
  return n >= 0 ? answer : answer - 1;
}
