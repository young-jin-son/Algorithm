function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const bridge = Array(bridge_length).fill(0);
  let bridge_weight = 0;
  let i = 0;

  while (i < truck_weights.length) {
    answer++;
    bridge_weight -= bridge.shift();

    if (bridge_weight + truck_weights[i] <= weight) {
      let truck_weight = truck_weights[i];
      bridge.push(truck_weight);
      bridge_weight += truck_weight;
      i++;
    } else {
      bridge.push(0);
    }
  }

  answer += bridge_length;
  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110