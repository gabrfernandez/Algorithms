//Graphs- a set of related values in a pair wise fashion, looks like a network
//made up of nodes (or vertex) connected by edges
//ideal to show relationships
//linked lists are a type of tree, which are type of graph
//Pros: relationships
//Cons:Scaling is hard
//neo4j 

//directed (one way) vs undirected graphs (two way), great to show relationship
//weighted (values in the edges) vs unweighted graphs (no values in edges), great for calculating best path
//cyclic(nodes connected in circular/cycle) vs acyclic(cant get back to original node/not cycle) 

//graphs are built on top of other data structures

//edge list
//    2 - 0
//  /  \
// 1 -  3
const edgeList=[[0,2], [2,3],[2,1],[1,3]];

//adjacent list
//node values   0    1       2       3
const myAdjacentList = [[2],[2,3],[0,1,3],[1,2]]

//adjacent matrix
const adjacentMatrix=[
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0]
]

class Graph{
    constructor(){
        this.numberOfNodes=0;
        this.adjacentList={};
    }
    addVertex(node){
        //node will be key, initially empty array
        this.adjacentList[node]=[];
        this.numberOfNodes++;
    }
    addEdge(node1,node2){
        //undirected graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
    showConnections(){
        const allNodes= Object.keys(this.adjacentList);
        for(let node of allNodes){
            let nodeConnections=this.adjacentList[node];
            let connections="";
            let vertex;
            for (vertex of nodeConnections){
                connections += vertex + " ";
            }
            console.log(node +"-->" + connections);
        }
    }
}

const myGraph= new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections();