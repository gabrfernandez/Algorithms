// undirected, not weighted, no cycles

const airports='PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes=[
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];
//THE GRAPH
const adjacencyList= new Map();

function addNode(airport){
    adjacencyList.set(airport, []);
}

function addEdge(origin, destination){
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

//create the graph
airports.forEach(addNode);
routes.forEach(route=>addEdge(...route))
console.log(adjacencyList);

function bfs(start, end){
    const visited=new Set();
    const queue=[start]
    while(queue.length>0){
        const airport=queue.shift();
        const destinations=adjacencyList.get(airport);
        for(const destination of destinations){
            if(destination===end){
                console.log('found it');
            }
            if(!visited.has(destination)){
                visited.add(destination);
                queue.push(destination);
            }
        }
    }
}
bfs('PHX', 'BKK')

function dfs(start, end, visited=new Set()){
    console.log(start);
    visited.add(start);

    const destinations=adjacencyList.get(start);

    for(const destination of destinations){
        if(destination ===end){
            console.log('DFS found '+end+' in steps')
            return;
        }
        if (!visited.has(destination)){
            dfs(destination, end, visited)
        }
    }

}
dfs('PHX', 'BKK')

class Graph{
    constructor(isDirected=false){
        this.isDirected=isDirected;// indicate if graph is directed or not
        this.vertices=[];//store the names of all the vertices of the graph
        this.adjList= new Map();//store the adjacent list. 
        //name of vertex as key and list of adjacent vertices as values
    }

    addVertex(v){
        if(!this.vertices.includes(v)){// if does not exist yet
            this.vertices.push(v);//add
            this.adjList.set(v,[]);//initialize adjacent list with empty array by setting 
            //the diction value of vertex v key with an empty array
        }
    }

    addEdge(v,w){
        if(!this.adjList.get(v)){
            this.addVertex(v);//if vertex v does not exist in graph, add vertex v
        }
        if(!this.adjList.get(w)){
            this.addVertex(w);//if vertex w does not exist in graph, add vertex w
        }
        this.adjList.get(v).push(w);//add ed from vertex v to vertex w by adding w to adjacency list of v
        if(!this.isDirected){
            this.adjList.get(w).push(v);//add edge from w to v was this is indirect graph
        }
    }

    getVertices(){
        return this.vertices;
    }
    getAdjList(){
        return this.adjList;
    }

    toString(){
        let s='';
        for(let i=0;i<this.vertices.length;i++){//iterate the list of vertices arrays
            s+= `${this.vertices[i]}-> `;//add name of vertex to our string
            const neighbors=this.adjList.get(this.vertices[i]);//get the adjacent list for this vertex
            for(let j=0;j<neighbors.length;j++){//iterate through adjacent list
                s+=`${neighbors[j]}`;//add it to our string
            }
            s+='\n' //add new line
        }
        return s;
    }
}
const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; //arr with all vertices we want to add
for (let i = 0; i < myVertices.length; i++) { //iterate through vertices and add them to graph
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B'); //adding desired edges
graph.addEdge('A', 'C'); 
graph.addEdge('A', 'D'); 
graph.addEdge('C', 'D'); 
graph.addEdge('C', 'G'); 
graph.addEdge('D', 'G'); 
graph.addEdge('D', 'H'); 
graph.addEdge('B', 'E'); 
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString())