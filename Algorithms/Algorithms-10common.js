//check if two strings ar anagrams
const anagram=(str1, str2)=>{
    if (str1.length !== str2.length){ //checking length are equal
        return false;
    }

    let freq1={}; //initialize hash tables
    let freq2={};

    for(let char of str1){//looping str1 and adding to hash table
        if (char in freq1){
            freq1[char] +=1;
        }else{
            freq1[char]=1;
        }
    }
    for (let char in str2){//looping str2 and adding to hash table
        if(char in freq2){
            freq2[char]+=1;
        }else{
            freq2[char]=1;
        }
    }

    for(let key in freq1){ //check if freq1 and freq2 have the same values
        if(!freq1[key] || freq1[key] != freq2[key]){
            return false;
        }
    }
    return true;
}
anagram('gabe', 'bage') // big o time=o(n), space=o(n)

const anagram2=(str1, str2)=>{//two anagrams have same lexicographically sorted string
    if (str1.length !== str2.length) return false;
    if(str1.split('').sort().join('') ==str2.split('').sort().join('')){
      return true;
    }else{
      return false;
    }
}
anagram2('gabe', 'ebga') // T(n)=o(nlogn), s(n)=o(n)

//First and last position
//given sorted array of integers and target integer, find the index of first and last
//position of target in arr. If target cannot be found return false
 const firstAndLast=(arr, target)=>{//linear search
     for (let i=0; i<arr.length;i++){
         if(arr[i]==target){
             let start=i;
             while(i+1< arr.length && arr[i+1]==target){
                 i++
             }
             return [start, i];
         }
     }
     return false;
 }

 firstAndLast([1,2,3,4,4,4,4,5], 4)// T(n)=o(n) S(n)=o(1)

 const binarySearchStartIndex=(arr,target)=>{
     if(arr[0] == target){ // early exit
         return 0;
     }

     let left=0;
     let right =arr.length-1;

     while(left<=right){//finds start index
         let mid=Math.floor((left+right)/2);
         if(arr[mid]==target && arr[mid-1]<target){
             return mid;
         }else if(arr[mid]<target){
             left=mid+1;
         }else{
             right=mid-1;
         }
     }
     return -1;
 }

 const binarySearchEndIndex=(arr, target)=>{
     if(arr[-1] ==target){//early exit
         return arr.length-1;
     }
     let left=0;
     let right=arr.length-1;

     while(left<=right){
        let mid=Math.floor((left+right)/2);
         if(arr[mid]==target && arr[mid+1]>target){
             return mid;
         }else if(arr[mid]>target){
             right =mid-1;
         }else{
             left=mid+1;
         }
     }
     return -1;
 }

 const binarySearchFirstLast=(arr,target)=>{
     if (arr.length==0 || arr[0]>target || arr[-1]<target){
         return false;
     }else{
         let start=binarySearchStartIndex(arr,target);
         let end=binarySearchEndIndex(arr,target);
         return [start, end];
     }
 }
 binarySearchFirstLast([1,2,3,4,4,4,4,5],4)// T(n)=o(logn), S(n)=1;

 //Kth largest element
 //given arr and value k, find the kth largest element
const kthLargest=(arr, k)=>{
    for (i=0; i<k-1;i++){ //remove the max every iteration
        let index=arr.indexOf(Math.max(arr))
        arr.splice(index,1)
    }
    return Math.max(...arr);//return max after remove k-1 maximums before
}
kthLargest([2,3,4,5,7],2) //output:5 T(n)=o(kn) S(n)=o(1)

//sort the arr then return last-k position
const kthLargestSorted=(arr, k)=>{
    return arr.sort((a, b) => (b - a))[k - 1]
}
kthLargestSorted([5,4,6,7,8],3) //output:6 T(n)=o(n logn) S()=depends on sporting func

//best solution to use max heap. Other languages have built-in ds

//symmetric tree
//dfs problem
//given binary tree, check if it's symmetric
const isSymmetric = (root)=> {
    if (root == null) return true;
    return areSymmetric(root.left, root.right);
};

const areSymmetric=(left, right)=> {
    if (left == null && right == null) return true; // If both sub trees are empty
    if (left == null || right == null) return false; // If only one of the sub trees are empty
    if (left.val !== right.val) return false; // If the values dont match up
    
	// Check both subtrees but travelled in a mirrored/symmetric fashion
	// (one goes left, other goes right)  and make sure they're both symmetric
    return areSymmetric(left.left, right.right) &&
    areSymmetric(left.right, right.left);
}
isSymmetric([1,2,2,3,4,4,3]) //output:true
//T(n)=O(n) S(n)=O(logn)

//Generate parentheses
//backtracking problem
//given an integer n, generate all the valid combos of n pairs of parentheses
const generateParenthesis = (n)=> {
    const combinations = [];
    // Here we know we can only start with an opening bracket => use 1 open:
    // but we can also start with an empty string and 0 like so:
    // buildCombinationFrom('', 0, 0, n, combinations);
    buildCombinationFrom('(', 1, 0, n, combinations);
    return combinations;
};

const buildCombinationFrom=(string, openUsed, closeUsed, n, combinations)=> {
    // Base case: when we reach 2n length
    if (string.length === 2*n) {
        // Add the string to the list of combination:
        combinations.push(string);
        // Exit from this recursive call.
        return;
    }
    // Case: when we can add more opening bracket:
    // If we haven't used all opening bracket (n pairs = n opens)
    if (openUsed < n) {
        // Add 1 opening, update opening used:
        buildCombinationFrom(string + '(', openUsed + 1, closeUsed, n, combinations);
    }
    // Case: when we can add more closing bracket:
    // If we have more opening than closing:
    if (openUsed > closeUsed) {
        // Add 1 closing, update closing used:
        buildCombinationFrom(string + ')', openUsed, closeUsed + 1, n, combinations);
    }
}
generateParenthesis(3) // output: ["((()))","(()())","(())()","()(())","()()()"]
//Time = O(4^n/(sqrt(n))) Space = O(4^n/(sqrt(n)))

