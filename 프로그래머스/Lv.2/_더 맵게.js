function solution(scoville, K) {
  let answer = 0;
  scoville.sort((a, b) => b - a);
  const heap = [];

  // MAKE HEAP
  for (let i = 0; 2 ** i - 1 < scoville.length; i++) {
    heap.push(scoville.slice(2 ** i - 1, 2 ** (i + 1) - 1));
  }
  console.log(heap);

  while (heap.at(-1).at(-1) < K && heap.length >= 2) {
    const min = heap.at(-1).pop();
    const next_min = heap.at(-1).pop() || heap.at(-2).pop();
    if (!heap.at(-1).length) {
      heap.pop();
    }
    const mixed = min + next_min * 2;
    if (heap.at(-1).length & (heap.at(-1).length - 1)) {
      heap.at(-1).push(mixed);
    } else {
      heap.push([mixed]);
    }
    heap.at(-1).sort((a, b) => b - a);


    console.log(heap);
    console.log(min, next_min);
  }
}

console.log(solution([1, 2, 3, 4, 5, 6, 9, 10, 12], 7)); // 2 
// console.log(solution([1, 2, 3], 5)); // 2
// console.log(solution([1, 2, 3], 100)); // -1
// console.log(solution()); // 