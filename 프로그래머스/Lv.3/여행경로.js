const START_AIRPORT = "ICN";

function solution(tickets) {
  const N = tickets.length;
  const answers = [];
  const used = new Array(N).fill(false);

  const dfs = (path) => {
    if (path.length === N + 1) answers.push(path);
    tickets.forEach(([src, dest], i) => {
      if (!used[i] && src === path.at(-1)) {
        used[i] = true;
        dfs([...path, dest]);
        used[i] = false;
      }
    });
  }

  tickets.sort();
  dfs([START_AIRPORT]);

  return answers.sort()[0];
}