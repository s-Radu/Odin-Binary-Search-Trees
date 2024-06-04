# BST.js

This JavaScript project defines a Binary Search Tree (BST) data structure. The BST is implemented as a class with several methods for manipulating and querying the tree.

## Class: Node

This class represents a node in the BST. Each node has a `data` property for storing the value, and `left` and `right` properties for referencing the left and right child nodes respectively.

## Class: Tree

This class represents the BST itself. It has a `root` property which is the root node of the tree.

### Method: constructor(array)

The constructor takes an array of numbers, sorts it, removes duplicates, and builds a balanced BST.

### Method: buildTree(array)

This method sorts the input array, removes duplicates, and calls `buildSubTree` to create a balanced BST.

### Method: buildSubTree(array, start, end)

This method recursively builds a balanced BST from a sorted array.

### Method: insert(value)

This method inserts a new value into the BST. If the value already exists in the BST, it will not be inserted again.

### Method: insertNode(node, value)

This method is a helper for `insert`. It recursively finds the correct location to insert the new value.

### Method: delete(value)

This method deletes a value from the BST. If the value does not exist, the BST remains unchanged.

### Method: deleteNode(node, key)

This method is a helper for `delete`. It recursively finds the node to delete and restructures the tree to maintain the BST property.

### Method: findMinNode(node)

This method finds the node with the smallest value in the BST.

### Method: find(value)

This method returns the node with the specified value. If the value does not exist in the BST, it returns null.

### Method: findNode(node, value)

This method is a helper for `find`. It recursively searches the BST for the specified value.

---

# Usage!

## Function: generateRandomNumbers(num, max)

This function generates an array of random numbers. It takes two parameters: `num` which is the number of random numbers to generate, and `max` which is the maximum value for the random numbers.

## Importing the Tree class and prettyPrint function

The `Tree` class and `prettyPrint` function are imported from `BST.js`.

## Creating a random Tree

An array of 15 random numbers less than 100 is generated using the `generateRandomNumbers` function. A new `Tree` is created with this array, and the tree is printed using the `prettyPrint` function. The tree's balance is checked using the `isBalanced` method.

## Unbalancing the Tree

An array of 5 random numbers less than 200 is generated. Each number in the array is inserted into the tree using the `insert` method, unbalancing the tree. The tree is then printed and its balance is checked again.

## Rebalancing the Tree

The tree is rebalanced using the `rebalance` method. The tree is then printed and its balance is checked again.

## Traversing the Tree

The tree is traversed in level order, pre order, post order, and in order using the `levelOrder`, `preOrder`, `postOrder`, and `inOrder` methods respectively.

## Commented Code

There is commented code at the end of the file that tests the `Tree` class methods with an unsorted array. This includes inserting and deleting nodes, finding nodes, checking the height and depth of nodes, and checking if the tree is balanced.
