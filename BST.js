class Node {
	constructor(data) {
		this.node = data;
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
		if (start > end) return;
		let mid = Math.floor((start + end) / 2);
		let node = new Node(mid);

		node.left = this.buildTree(array, start, mid - 1);
		node.right = this.buildTree(array, mid + 1, end);

		return node;
	}
}
