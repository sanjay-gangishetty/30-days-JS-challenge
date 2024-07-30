// use the graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
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
      return "Vertex not found in the graph";
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

  shortestPath(start, end) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      return "Vertex not found in the graph";
    }

    const visited = new Set();
    const queue = [[start]];
    visited.add(start);

    while (queue.length > 0) {
      const path = queue.shift();
      const vertex = path[path.length - 1];

      if (vertex === end) {
        return path;
      }

      const neighbors = this.adjacencyList.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          const newPath = [...path, neighbor];
          queue.push(newPath);
        }
      }
    }

    return "No path found";
  }

  displayGraph() {
    for (const [vertex, edges] of this.adjacencyList.entries()) {
      console.log(`${vertex} -> ${edges.join(", ")}`);
    }
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log("Graph:");
graph.displayGraph(); // Display the graph

console.log("\nBFS starting from vertex A:");
console.log(graph.bfs("A")); // Output: ['A', 'B', 'C', 'D', 'E', 'F']

console.log("\nShortest path from A to F:");
console.log(graph.shortestPath("A", "F")); // Output: ['A', 'B', 'D', 'F']

/* Output -------------
Graph:
A -> B, C
B -> A, D
C -> A, E
D -> B, E, F
E -> C, D, F
F -> D, E

BFS starting from vertex A:
[ 'A', 'B', 'C', 'D', 'E', 'F' ]

Shortest path from A to F:
[ 'A', 'B', 'D', 'F' ]
*/
