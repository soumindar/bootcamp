// pseudocode: https://www.hackerearth.com/practice/algorithms/graphs/breadth-first-search/tutorial/

const bfs = (G, s) => {
  let Q = [];
  Q.push(s);

  let visited = [...G].map(x => new Array(x.length).fill(false));

  while (Q.length > 0) {
    // console.log(visited);

    let u = Q.shift();
    if (!visited[u[0]][u[1]]) {
      visited[u[0]][u[1]] = true;
      if ((u[0] - 1 >= 0) && (!visited[u[0] - 1][u[1]])) {
        Q.push([u[0] - 1, u[1]]);
      }
      if ((u[1] + 1 < G[1].length) && (!visited[u[0]][u[1] + 1])) {
        Q.push([u[0], u[1] + 1]);
      }
      if ((u[0] + 1 < G.length) && (!visited[u[0] + 1][u[1]])) {
        Q.push([u[0] + 1, u[1]]);
      }
      if ((u[1] - 1 >= 0) && (!visited[u[0]][u[1] - 1])) {
        Q.push([u[0], u[1] - 1]);
      }
   }
  }
}

const G = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const start = [0, 0];

bfs(G, start);