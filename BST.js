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
		// if the tree is empty, create a new node with the value and insert it as the root
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

	delete(value) {
		this.root = this.deleteNode(this.root, value);
	}

	deleteNode(node, key) {
		// If the subtree is empty, there's nothing to delete
		if (node === null) return null;

		// If the key to delete is less than the node's data, delete from the left subtree
		if (key < node.data) {
			node.left = this.deleteNode(node.left, key);
			return node;
		}
		// If the key to delete is greater than the node's data, delete from the right subtree
		else if (key > node.data) {
			node.right = this.deleteNode(node.right, key);
			return node;
		}
		// If the key to delete is equal to the node's data, delete this node
		else {
			// Case 1 - No Child
			// If the node has no children, just remove it
			if (node.left === null && node.right === null) {
				node = null;
				return node;
			}
			// Case 2 - One Child
			// If the node has a right child but no left child, replace the node with its right child
			else if (node.left === null) {
				node = node.right;
				return node;
				// If the node has a left child but no right child, replace the node with its left child
			} else if (node.right === null) {
				node = node.left;
				return node;
			}
			// Case 3 - Two Children
			// If the node has two children, replace it with its in-order successor (smallest node in its right subtree)
			let tmp = this.findMinNode(node.right);
			node.data = tmp.data;
			// Delete the in-order successor
			node.right = this.deleteNode(node.right, tmp.data);
			return node;
		}
	}

	findMinNode(node) {
		// If the node has a left child, find the minimum node in the left subtree
		if (node.left === null) {
			return node;
		} else {
			return this.findMinNode(node.left);
		}
	}

	find(value) {
		// Call the private method which handles the recursion
		return this.findNode(this.root, value);
	}

	findNode(node, value) {
		if (node === null) return null;
		if (value < node.data) {
			return this.findNode(node.left, value);
		} else if (value > node.data) {
			return this.findNode(node.right, value);
		} else {
			return node;
		}
	}

	levelOrder(callback) {
		// Initialize an array to hold the node values if no callback is provided
		let result = [];

		// If the tree is empty, return the empty array
		if (this.root === null) {
			return result;
		}

		// Initialize a queue and add the root node to it
		let queue = [];
		queue.push(this.root);

		// Loop as long as there are nodes in the queue
		while (queue.length > 0) {
			// Remove the first node from the queue
			let node = queue.shift();

			// If a callback is provided, call it with the current node
			// Otherwise, add the node's data to the result array
			if (callback) {
				callback(node);
			} else {
				result.push(node.data);
			}

			// If the current node has a left child, add it to the queue
			if (node.left !== null) {
				queue.push(node.left);
			}

			// If the current node has a right child, add it to the queue
			if (node.right !== null) {
				queue.push(node.right);
			}
		}

		// If no callback was provided, return the array of node values
		return result;
	}

	inOrder(callback) {
		// Array to hold the nodes value if no callback is provided!
		let result = [];

		// Start the traversal at the root!
		this.inOrderHelper(this.root, callback, result);
		// Return the array of node values!
		return result;
	}

	inOrderHelper(node, callback, result) {
		if (node !== null) {
			// Traverse the left subtree!
			this.inOrderHelper(node.left, callback, result);
			// If a callback is provided, call it with the current node!
			if (callback) {
				callback(node);
			}
			// Otherwise add the node's data to the result array!
			else {
				result.push(node.data);
			}
			// Traverse the right subtree!
			this.inOrderHelper(node.right, callback, result);
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
