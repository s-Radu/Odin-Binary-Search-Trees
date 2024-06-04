import Tree, {prettyPrint} from './BST.js';

console.log(' ---- Create a random Tree ---- ');

function generateRandomNumbers(num, max) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(Math.floor(Math.random() * max));
	}
	return arr;
}

let arr = generateRandomNumbers(15, 100);

let tree1 = new Tree(arr);

prettyPrint(tree1.root);
console.log(`Tree balanced: ${tree1.isBalanced()}`);

console.log('Level order:', tree1.levelOrder());
console.log('Pre order:', tree1.preOrder());
console.log('Post order:', tree1.postOrder());
console.log('In order:', tree1.inOrder());

console.log('----- Unbalance the tree! -----');
let unbalance = generateRandomNumbers(5, 200);
unbalance.forEach((num) => tree1.insert(num));

prettyPrint(tree1.root);
console.log(`Tree balanced: ${tree1.isBalanced()}`);
tree1.rebalance();

console.log(' ---- Rebalanced the tree ----');
prettyPrint(tree1.root);
console.log(`Tree balanced: ${tree1.isBalanced()}`);
console.log('Level order:', tree1.levelOrder());
console.log('Pre order:', tree1.preOrder());
console.log('Post order:', tree1.postOrder());
console.log('In order:', tree1.inOrder());

// Test with an unsorted array
// let tree = new Tree([4, 2, 9, 6, 5, 3, 8, 1, 2, 12, 45, 33, 27, 7, 10, 7]);

// Test Tree methods
// tree.insert(24);
// tree.insert(8);
// tree.insert(0);
// tree.insert(72);
// tree.delete(12);
// console.log(tree.find(8));
// console.log(`Level Order: ${tree.levelOrder()}`);
// console.log(`In Order: ${tree.inOrder()}`);
// console.log(`Pre Order: ${tree.preOrder()}`);
// console.log(`Post Order: ${tree.postOrder()}`);
// let node7 = tree.find(7);
// console.log(`Height of node 7: ${tree.height(node7)}`);
// let node10 = tree.find(10);
// console.log(`Depth of node 10: ${tree.depth(node10)}`);
// console.log(tree.isBalanced());
// tree.insert(99);
// tree.insert(45);
// tree.insert(36);
// tree.insert(15);
// tree.insert(151);
// prettyPrint(tree.root);
// console.log(tree.isBalanced());
// tree.rebalance();
// console.log('Balanced Tree!');
// prettyPrint(tree.root);
// console.log(tree.isBalanced());
