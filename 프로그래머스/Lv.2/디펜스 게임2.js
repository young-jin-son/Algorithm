function solution(n, k, enemy) {
  if (k >= enemy.length) return enemy.length;

  let answer = k;
  let enemyIdx = k;
  const mujuk = enemy.slice(0, k);
  let min = Math.min(...mujuk);
  let minIdx = mujuk.indexOf(min);

  while ((n >= min || n >= enemy[enemyIdx]) && answer < enemy.length) {
    let nextEnemy = enemy[enemyIdx++];
    if (nextEnemy <= min) {
      n -= nextEnemy;
    } else {
      n -= min;
      mujuk[minIdx] = nextEnemy;
    }
    min = Math.min(...mujuk);
    minIdx = mujuk.indexOf(min);
    answer += 1;
  }
  return answer;
}