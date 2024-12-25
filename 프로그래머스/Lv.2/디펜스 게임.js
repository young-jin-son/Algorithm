function solution(n, k, enemy) {
  if (k >= enemy.length) return enemy.length;

  let answer = k;
  let enemyIdx = k;
  const mujuk = {};
  for (let i = 0; i < k; i++) {
    mujuk[enemy[i]] = (mujuk[enemy[i]] || 0) + 1;
  }
  let min = Math.min(...Object.keys(mujuk));

  while ((n >= min || n >= enemy[enemyIdx]) && answer < enemy.length) {
    let nextEnemy = enemy[enemyIdx++];
    if (nextEnemy <= min) {
      n -= nextEnemy;
    } else {
      n -= min;
      mujuk[min] -= 1;
      if (!mujuk[min]) delete mujuk[min];
      mujuk[nextEnemy] = (mujuk[nextEnemy] || 0) + 1;
    }
    min = Math.min(...Object.keys(mujuk));
    answer += 1;
  }
  return answer;
}