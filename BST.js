class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

export default class Tree {
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

	insert(value) {
		// ifthe tree is empty, create a new node with the value and insert it as the root
		if (this.root === null) {
			this.root = new Node(value);
		} else {
			// else, start the recursive insert process at the root
			this.insertNode(this.root, value);
		}
	}

	insertNode(node, value) {
		// If, the value is less then the node data, go left!
		if (value < node.data) {
			// If there is no left child, insert here!
			if (node.left === null) {
				node.left = new Node(value);
			} else {
				// Else, recursive call on the left child!
				this.insertNode(node.left, value);
			}
			// If the value is greater then the node data, go right!
		} else if (value > node.data) {
			// If there is no right child, insert here!
			if (node.right === null) {
				node.right = new Node(value);
			} else {
				// Else, recursive call on the right child!
				this.insertNode(node.right, value);
			}
		} else {
			// The key is equal to the node's data, so it's a duplicate
			console.log(
				`Duplicate value: ${value}.
No duplicates are allowed in BST!`
			);
		}
	}
}

export function prettyPrint(node, prefix = '', isLeft = true) {
	if (node === null) {
		return;
	}
	if (node.right !== null) {
		prettyPrint(node.right, prefix + (isLeft ? '│   ' : '    '), false);
	}
	console.log(prefix + (isLeft ? '└── ' : '┌── ') + node.data);
	if (node.left !== null) {
		prettyPrint(node.left, prefix + (isLeft ? '    ' : '│   '), true);
	}
}
