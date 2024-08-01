function solution(cards1, cards2, goal) {
  let [i, j] = [0, 0];
  for (const card of goal) {
    if (cards1[i] === card) {
      i++;
    } else if (cards2[j] === card) {
      j++;
    } else {
      return "No";
    }
  }
  return "Yes";
}

console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"])); // Yes
console.log(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"])); // No