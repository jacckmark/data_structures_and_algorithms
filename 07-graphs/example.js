class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // adds new node/vertices
  addVertex(vertex) {
    // we check if such node does not already exist in our adjacencyList and if
    // not we are adding this key with an empty array (to store later on connections)
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      // informs us if we succeeded when creating node
      return true;
    }

    // informs us if we succeeded when creating node
    return false;
  }
}

console.log("\nafter creating one");
let myGraph = new Graph();
console.log(myGraph);

console.log("\nafter running addVertex few times");
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
console.log(myGraph);
