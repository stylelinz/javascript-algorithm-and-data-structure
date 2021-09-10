class WeightedGraph {
  constructor () {
    this.adjacencyList = {}
  }

  addVertex (vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge (v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight })
    this.adjacencyList[v2].push({ node: v1, weight })
  }

  dijkstra (startVertex, endVertex) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    const path = []
    let smallest

    // build up initial state
    for (const vertex in this.adjacencyList) {
      if (vertex === startVertex) {
        distances[vertex] = 0
      } else {
        distances[vertex] = Infinity
      }
      nodes.enqueue(vertex, distances[vertex])
      previous[vertex] = null
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val
      if (smallest === endVertex) {
        // finished, build up path to return at end
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        path.push(smallest)
        break
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor of this.adjacencyList[smallest]) {
          const candidate = distances[smallest] + neighbor.weight
          if (candidate < distances[neighbor.node]) {
            distances[neighbor.node] = candidate
            previous[neighbor.node] = smallest
            nodes.enqueue(neighbor.node, candidate)
          }
        }
      }
    }

    return path.reverse()
  }
}

class PriorityQueue {
  constructor () {
    this.values = []
  }

  enqueue (val, priority) {
    this.values.push({ val, priority })
    this.sort()
  }

  dequeue () {
    return this.values.shift()
  }

  sort () {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

const g = new WeightedGraph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B', 4)
g.addEdge('A', 'C', 2)
g.addEdge('B', 'E', 3)
g.addEdge('C', 'D', 2)
g.addEdge('C', 'F', 4)
g.addEdge('D', 'E', 3)
g.addEdge('D', 'F', 1)
g.addEdge('E', 'F', 1)

console.log(g.dijkstra('A', 'E'))
