const Queue = require('./stack-and-queue')
class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex (vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge (v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  removeEdge (v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1)
  }

  removeVertex (vertex) {
    this.adjacencyList[vertex].forEach(value => {
      this.removeEdge(vertex, value)
    })
    delete this.adjacencyList[vertex]
  }

  dfsRecursive (startVertex) {
    const visited = {}
    const { adjacencyList } = this;
    (function dfs (vertex) {
      if (!vertex) return null
      visited[vertex] = true
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) return dfs(neighbor)
      })
    }(startVertex))

    return Object.keys(visited)
  }

  dfsIterative (startVertex) {
    const visited = {}
    const { adjacencyList } = this
    const stack = [startVertex]
    while (stack.length) {
      const vertex = stack.pop()
      if (!visited[vertex]) {
        visited[vertex] = true
        stack.push(...adjacencyList[vertex])
      }
    }
    return Object.keys(visited)
  }

  bfs (startVertex) {
    const q = new Queue()
    q.enqueue(startVertex)
    const visited = {}
    visited[startVertex] = true
    while (q.size) {
      const visit = q.dequeue()
      this.adjacencyList[visit].forEach(vertex => {
        if (!visited[vertex]) {
          visited[vertex] = true
          q.enqueue(vertex)
        }
      })
    }
    return Object.keys(visited)
  }
}

const g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')
g.addVertex('Tyan')
