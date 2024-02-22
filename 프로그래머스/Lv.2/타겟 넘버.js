function solution(numbers, target) {
  const graph = [[0]];
  for (const num of numbers) {
    const newD = [];
    const prevD = graph.at(-1);
    for (const p of prevD) {
      newD.push(p - num);
      newD.push(p + num);
    }
    graph.push(newD);
  }
  return graph.at(-1).filter(num => num === target).length;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4)); // 2