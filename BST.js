class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor(array) {
		this.root = this.buildTree(array);
	}

	// Sort the array and eliminate the duplicates
	buildTree(array) {
		array = array.sort((a, b) => a - b);
		array = array.filter((value, index, self) => self.indexOf(value) === index);
		return this.buildSubTree(array, 0, array.length - 1);
	}

	// Turn the array into a balanced binary tree
	buildSubTree(array, start, end) {
		if (start > end) return null;

		let mid = Math.floor((start + end) / 2);
		let node = new Node(array[mid]);

		node.left = this.buildSubTree(array, start, mid - 1);
		node.right = this.buildSubTree(array, mid + 1, end);

		return node;
	}
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
	if (node === null) {
		return;
	}
	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
	}
	console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
	}
};

// Test with an unsorted array
let tree = new Tree([4, 2, 9, 6, 5, 3, 8, 1, 2, 12, 45, 33, 27, 7, 10, 7]);
prettyPrint(tree.root);
