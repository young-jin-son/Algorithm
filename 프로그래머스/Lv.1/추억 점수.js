function solution(names, yearning, photoes) {
  const answer = [];
  const people = {};

  for (let i = 0; i < names.length; i++) {
    people[names[i]] = yearning[i];
  }

  for (const photo of photoes) {
    let score = 0;
    for (const person of photo) {
      score += people[person] || 0;
    }
    answer.push(score);
  }

  return answer;
}

console.log(solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]])); // [19, 15, 6]
console.log(solution(["kali", "mari", "don"], [11, 1, 55], [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]])); // [67, 0, 55]
console.log(solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may"], ["kein", "deny", "may"], ["kon", "coni"]])); // [5, 15, 0]