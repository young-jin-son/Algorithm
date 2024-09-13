function solution(skill, skill_trees) {
  let answer = 0;
  const skillSet = new Set(skill);

  for (const tree of skill_trees) {
    let filtered = "";
    for (const s of tree) {
      if (skillSet.has(s)) {
        filtered += s;
      }
    }
    if (skill.startsWith(filtered)) {
      answer++;
    }
  }

  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])); // 2