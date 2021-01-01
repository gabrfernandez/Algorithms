//Trees- Hierarchical structure
//tree is made up from nodes, similar to linked list (which are linear)

//     1        root = 1
//  /  |  \     parent = 1 , 3
// 2   3   4    child= 2,3,4  6,7
//    / \       leaf=2, 4, 6, 7
//   6   7      sibling=2,3,4  6,7

//full tree- each node has either 0 or 2 nodes.
//perfect binary tree, the number of nodes double with each level. 
//binary tree- each node can only have 0,1, 2 nodes, and each child could only have 1 parent.

//binary search tree= lookup, insert, delete are O(log N) 
//divide and conquer- eliminate half of the possibilities with each step
//log 100=2;
//10^2= 100;

//binary search tree- good at searching and comparing. lookup, insert, delete= O(log N)
//everything to left is decreasing, everything to the right is increasing, up to 2 children
//preserves relationships.

//balanced vs unbalanced- becomes slow O(n)

//BST- binary search trees pros and cons
//pros= better than O(n), ordered, flexible size
//cons= no O(1) operations

class Node{
    constructor(value){
        this.left=null;
        this.right=null;
        this.value=value;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    insert(value){
        const newNode= new Node(value);
        if(this.root===null){
            this.root=newNode;
        }else{
            let currentNode=this.root;
            while(true){
                if(value<currentNode.value){
                    //Left
                    if(!currentNode.left){
                        currentNode.left=newNode;
                        return this;
                    }
                    currentNode=currentNode.left
                }else{
                    //Right
                    if(!currentNode.right){
                        currentNode.right=newNode;
                        return this;
                    }
                    currentNode=currentNode.right;
                }
            }
        }
    }
    lookup(value){
        if(!this.root){
            return false;
        }
        let currentNode=this.root;
        while(currentNode){
            if(value<currentNode.value){
                currentNode=currentNode.left;
            }else if(value>currentNode.value){
                currentNode=currentNode.right;
            }else if(value===currentNode.value){
                return currentNode;
            }
        }
        return false;
    }
    remove(value){
        if(!this.root){
            return false;
        }
        let currentNode=this.root;
        let parentNode=null;
        while(currentNode){
            if(value<currentNode.value){
                parentNode=currentNode;
                currentNode=currentNode.left;
            }else if(value> currentNode.value){
                parentNode=currentNode;
                currentNode=currentNode.right;
            }else if(value===currentNode.value){
                //match, option 1:no right child
                if(currentNode.right===null){
                    if(parentNode===null){
                        this.root=currentNode.left;
                    }else{
                        //if parent>current value, make current
                        //left child a child of parent
                        if(currentNode.value<parentNode.value){
                            parentNode.left=currentNode.left;
                        //if parent<current.value, make left child a 
                        //right child of parent
                        }else if(currentNode.value>parentNode.value){
                            parentNode.right=currentNode.left;
                        }
                    }
                //option 2:right child which doesn't have a left child
                }else if(currentNode.right.left===null){
                    currentNode.right.left=currentNode.left;
                    if(parentNode===null){
                        this.root=currentNode.right;
                    }else{
                        //if parent>current, make right child of the left
                        //of the parent
                        if(currentNode.value<parentNode.value){
                            parentNode.left=currentNode.right;
                        //if parent<current, make right child a right 
                        //child of the parent
                        }else if(currentNode.value>parentNode.value){
                            parentNode.right=currentNode.right;
                        }
                    }
                //option 3: right child that has a left child
                }else{
                    //find the right child's left most child
                    let leftmost=currentNode.right.left;
                    let leftmostParent=currentNode.right;
                    while(leftmost.left !== null){
                        leftmostParent=leftmost;
                        leftmost=leftmost.left;
                    }
                    //Parent's left subtree is now leftmost's 
                    //right subtree
                    leftmostParent.left=leftmost.right;
                    leftmost.left=currentNode.left;
                    leftmost.right=currentNode.right;

                    if(parentNode===null){
                        this.root=leftmost;
                    }else{
                        if(currentNode.value<parentNode.value){
                            parentNode.left=leftmost;
                        }else if(currentNode.value>parentNode.value){
                            parentNode.right=leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }
    breadthFirstSearch(){
        let currentNode=this.root;
        let list = [];
        let queue=[];
        queue.push(currentNode);

        while(queue.length > 0){
            currentNode = queue.shift();
            list.push(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
        return list;
    }
    breadthFirstSearchRecursion(queue, list){
        if(!queue.length){ //base case
            return list;
        }
        let currentNode=queue.shift();
        list.push(currentNode.value);
        if(currentNode.left){
            queue.push(currentNode.left);
        } 
        if(currentNode.right){
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchRecursion(queue,list)
    }
    DFSInorder(){
        return traverseInOrder(this.root, [])
    }
    DFSPostorder(){
        return traversePostOrder(this.root, [])
    }
    DFSPreorder(){
        return traversePreorder(this.root, [])
    }
}

function traverseInOrder(node, list){
    if(node.left){
        traverseInOrder(node.left, list);
    }
    list.push(node.value);//push the left first as to get it in order

    if(node.right){
        traverseInOrder(node.right, list);
    }
    return list;
}
function traversePreorder(node, list){
    list.push(node.value) //push at beginning, push parent first
    if(node.left){
        traversePreorder(node.left, list);
    }
    if(node.right){
        traversePreorder(node.right, list);
    }
    return list;
}
function traversePostOrder(node, list){
    if(node.left){
        traversePostOrder(node.left, list);
    }
    if(node.right){
        traversePostOrder(node.right, list);
    }
    list.push(node.value);// push at the end, push the children first
    return list;
}

//     9
//  4       20
//1   6   15   170
//Inorder-[1,4,6,9,15,20,170]
//Preorder-[9,4,1,6,20,15,170] useful to recreate a tree
//Postorder-[1,6,4,15,170,20,9] children come before the parent
const BST= new BinarySearchTree();
BST.insert(9);
BST.insert(4);
BST.insert(20);
BST.insert(1);
BST.insert(6);
BST.insert(15);
BST.insert(170);
//BST.lookup(6);
//BST.remove(170);
BST.breadthFirstSearch();
BST.breadthFirstSearchRecursion([BST.root], [])
BST.DFSInorder();
BST.DFSPreorder();

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
//AVL Tree & Red/Black Tree to balance binary search trees

//Heap is a different type of tree
//Binary Heaps- lookup O(n), insert & delete O(log N)
//great at doing comparative operations, priority queues, sorting algos
//binary heaps take least amount of space bc left to right insertion
//don't need to balance. preserve order of insertion

//Binary Heaps Pros and Cons
//Pros: better than O(n), priority, flexible size, fast insert
//cons:slow lookup


//Trie- searching tree. 
//speed and space
//Big O(length of word)