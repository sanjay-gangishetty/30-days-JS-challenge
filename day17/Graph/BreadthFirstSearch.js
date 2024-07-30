// Implement a graph class with methods to add vertices, add edges and perform a breadth first search
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
    }
  }

  bfs(startingVertex) {
    if (!this.adjacencyList.has(startingVertex)) {
      return 'Vertex not found in the graph';
    }

    const visited = new Set();
    const queue = [startingVertex];
    const result = [];

    visited.add(startingVertex);

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      const neighbors = this.adjacencyList.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  displayGraph() {
    for (const [vertex, edges] of this.adjacencyList.entries()) {
      console.log(`${vertex} -> ${edges.join(', ')}`);
    }
  }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

console.log('Graph:');
graph.displayGraph(); // Display the graph

console.log('\nBFS starting from vertex A:');
console.log(graph.bfs('A')); 

/* output -----------
  Graph:
A -> B, C
B -> A, D
C -> A, E
D -> B, E
E -> C, D

BFS starting from vertex A:
[ 'A', 'B', 'C', 'D', 'E' ]
*/
