function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  // 그래프 만들기
  const graph = {};
  graph[begin] = [];
  for (const word of words) {
    graph[word] = [];
  }
  for (const key in graph) {
    for (const word of words) {
      [...key].forEach((s, i) => {
        if (s !== word[i] && key.substr(0, i) + key.substr(i + 1) === word.substr(0, i) + word.substr(i + 1)) {
          graph[key].push(word);
        }
      })
    }
  }

  const visited = {};
  for (const key in graph) {
    visited[key] = false;
  }

  const answer = [];

  function dfs(start, cnt, stack) {
    if (start === target) { // target 찾았으면 answer에 cnt 넣고 return
      answer.push(cnt);
      return;
    }
    stack.push(start); // 방문했다고 표시
    for (const next of graph[start]) {
      if (!stack.includes(next)) {
        dfs(next, cnt + 1, stack);
      }
    }
    stack.pop();
    return;
  }

  dfs(begin, 0, []);

  return Math.min(...answer);
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])) // 4
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])) // 0
console.log(solution("aab", 'aba', ['abb', 'aba'])) // 2
/**
 * {
  hit: [ 'hot' ],
  hot: [ 'dot', 'lot' ],
  dot: [ 'hot', 'dog', 'lot' ],
  dog: [ 'dot', 'log', 'cog' ],
  lot: [ 'hot', 'dot', 'log' ],
  log: [ 'dog', 'lot', 'cog' ],
  cog: [ 'dog', 'log' ]
}
 */