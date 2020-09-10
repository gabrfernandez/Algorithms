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