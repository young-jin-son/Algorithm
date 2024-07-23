function solution(bandage, max_health, attacks) {
  let cur_health = max_health;
  let last_attack_time = 0;
  const [bandage_time, recovery_per_sec, additional_recovery] = bandage;

  for (let i = 0; i < attacks.length; i++) {
    const [attack_time, attack_damage] = attacks[i];
    const attack_interval = attack_time - last_attack_time - 1;

    cur_health += attack_interval * recovery_per_sec + (parseInt(attack_interval / bandage_time) * additional_recovery);
    if (cur_health > max_health) {
      cur_health = max_health;
    }

    cur_health -= attack_damage;
    if (cur_health <= 0) return -1;
    last_attack_time = attack_time;
  }

  return cur_health;
}

console.log(solution([5, 1, 5], 30, [[2, 10], [9, 15], [10, 5], [11, 5]])); // 5
console.log(solution([3, 2, 7], 20, [[1, 15], [5, 16], [8, 6]])); // -1
console.log(solution([4, 2, 7], 20, [[1, 15], [5, 16], [8, 6]])); // -1 
console.log(solution([1, 1, 1], 5, [[1, 2], [3, 2]])); // 3