function solution(tickets) {
  const graph = {};
  const answer = ["ICN"];
  const dest = {};

  for (const [to, from] of tickets) {
    if (!graph[to]) {
      graph[to] = [1];
    }
    graph[to].push(from);
    dest[from] = (dest[from] || 0) + 1;
  }

  for (const city in graph) {
    graph[city].sort();
  }

  console.log(graph);
  console.log(dest)

  const dfs = (cur) => {

  }

  for (let i = 1; i < graph["ICN"].length; i++) {
    dfs("ICN");
  }
  // while (answer.length !== tickets.length + 1) {

  // }

  return answer;
}

// console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]])); // ["ICN", "JFK", "HND", "IAD"]
console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]])); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
// console.log(solution()); // 
// console.log(solution()); // 