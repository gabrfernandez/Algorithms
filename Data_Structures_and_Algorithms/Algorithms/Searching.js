//Searching (BFS+DFS)


//linear search- finding a target value sequentially within a list 
//best case O(1), worst case O(n)

const beats=['Centaur', 'Godzilla', 'Mosura','Minotaur', 'Hydra','Nessie'];

beasts.indexOf('Godzilla') // logs 1

beasts.findIndex(function(item){
    return item==='Godzilla';
}) // logs 1

beasts.find(function(item){
    return item==='Godzilla'
})// returns Godzilla

beasts.includes('Godzilla') //logs True

//Binary Search -compares the target value to the middle element of the sorted array.
//divide and conquer. O(log n)



//Graph and Tree Traversal-BFS + DFS -O(n)
//benefit of using graph or tree O(log n) while search (vs instead of O(n) of arrays)
//better for searching, adding and deleting vs array, and hash tables do not have order

//Breadth First Search/Traversal (level by level)-O(n)
//uses additional memory since we gotta track the child node of all the nodes in a given level
//start at root, move left to right at second level, move left to right at the third level, etc
//Pro:good shortest path, closer nodes 
//Con: more memory
//if we know that node is likely closer to the root, use BFS
//good for making online recommendations based on relations

//Depth First Search/Traversal-O(n)
//start at root, searches each branch to the leaf node from left to right 
//(go as deep as possible from left to right)
//lower memory
//Pro: less memory, does path exist?(answers this question)
//Con: Can get slow if its deep
//if we think the is near the bottom, use DFS
//use to solve maze puzzles

//Searching Exercises
//1 If you have a solution is not far from the root of the tree
    //BFS
//2 If the tree is very deep and solutions are rare
    //BFS (DFS will take too long bc solutions are rare)
//3 If the tree is very wide
    //DFS (BFS will need too much memory)
//4 If solutions are frequent but located deep in the tree
    //DFS
//5 determining whether a path exists between two nodes
    //DFS
//6 finding the shortest path
    //BFS

//FOR BFS IMPLEMENTATION- see Data_structures->Trees.js->line 156

//For DFS- 3 ways to implement
//     101
//  /       \
//33        105
//inorder- 33, 101, 105
//preorder- 101, 33, 105
//postorder- 33,105,101


//Bellman-Ford & Dijkstra algorithms are used to solve shortest path of a weighted graph
//Bellman-Ford is effective for shortest path and accounts for negative weights
//Dijkstra is more efficient, but cannot account for negative weights 
//BFS assumes each path has the same weight