function solution(ingredient) {
  let count = 0;
  const stack = [];
  for (const item of ingredient) {
    stack.push(item);
    const sliced = stack.slice(stack.length - 4).join("");
    if (sliced === "1231") {
      count++;
      stack.splice(stack.length - 4, 4);
    }
  }
  return count;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0