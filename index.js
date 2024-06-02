import Tree, {prettyPrint} from './BST.js';

// Test with an unsorted array
let tree = new Tree([4, 2, 9, 6, 5, 3, 8, 1, 2, 12, 45, 33, 27, 7, 10, 7]);

// Test Tree methods
tree.insert(24);
tree.insert(8);
tree.insert(0);
tree.insert(72);
tree.delete(12);
console.log(tree.find(8));
console.log(`Level Order: ${tree.levelOrder()}`);
console.log(`In Order: ${tree.inOrder()}`);
console.log(`Pre Order: ${tree.preOrder()}`);
console.log(`Post Order: ${tree.postOrder()}`);
let node = tree.find(7);
console.log(`Height of node 7: ${tree.height(node)}`);
prettyPrint(tree.root);
