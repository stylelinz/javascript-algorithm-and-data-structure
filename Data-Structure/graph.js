class Graph {
  constructor () {
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
}

const g = new Graph()
g.addVertex('Keelung')
g.addVertex('Taichill')
g.addVertex('Trapei')
g.addVertex('Tokyo')
g.addVertex('Dallas')
g.addVertex('Hong Kong')
g.addEdge('Keelung', 'Trapei')
g.addEdge('Taichill', 'Trapei')
g.addEdge('Tokyo', 'Trapei')
g.addEdge('Dallas', 'Trapei')
g.addEdge('Dallas', 'Hong Kong')
g.addEdge('Tokyo', 'Hong Kong')
g.addVertex('Tyan')
