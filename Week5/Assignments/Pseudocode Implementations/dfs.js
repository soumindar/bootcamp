// pseudocode: http://www.cs.toronto.edu/~heap/270F02/node36.html

const dfs = (G, v) => {
  let S = [];
  let visited = [...G].map(x => new Array(x.length).fill(false));
  S.push(v);

  while (S.length > 0) {
    let u = S.pop();
    if (!visited[u[0]][u[1]]) {
      // console.log(visited);

      visited[u[0]][u[1]] = true;
      if ((u[0] - 1 >= 0) && (!visited[u[0] - 1][u[1]])) S.push([u[0] - 1, u[1]]);
      if ((u[1] + 1 < G[1].length) && (!visited[u[0]][u[1] + 1])) S.push([u[0], u[1] + 1]);
      if ((u[0] + 1 < G.length) && (!visited[u[0] + 1][u[1]])) S.push([u[0] + 1, u[1]]);
      if ((u[1] - 1 >= 0) && (!visited[u[0]][u[1] - 1])) S.push([u[0], u[1] - 1]);
    }
  }
}

const G = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const start = [0, 0];

dfs(G, start);