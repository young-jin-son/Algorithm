function solution(tickets) {
  const graph = {};
  const answer = [];
  const dest = {};

  for (const [to, from] of tickets) {
    if (!graph[to]) {
      graph[to] = [];
    }
    graph[to].push(from);
    dest[from] = (dest[from] || 0) + 1;
  }

  for (const city in graph) {
    graph[city].sort();
  }

  console.log(graph);

  const dfs = (cur, tmp) => {
    if (!dest[cur]) {
      return;
    }
    const arr = graph[cur];
    console.log(arr);
    // for (const city of arr) {
    //   dfs(city, [...tmp, city]);
    // }
    answer.push(cur);
  }

  dfs("ICN", ["ICN"]);

  return answer;
}

// console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]])); // ["ICN", "JFK", "HND", "IAD"]
console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]])); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
// console.log(solution()); // 
// console.log(solution()); // 