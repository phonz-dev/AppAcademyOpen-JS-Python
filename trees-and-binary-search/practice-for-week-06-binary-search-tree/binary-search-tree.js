// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    const newNode = new TreeNode(val);

    if (!currentNode) {
      this.root = newNode;
      return;
    }

    if (val < currentNode.val && !currentNode.left) {
      currentNode.left = newNode;
      return
    }

    if (val > currentNode.val && !currentNode.right) {
      currentNode.right = newNode;
      return;
    }

    if (val < currentNode.val && currentNode.left) {
      this.insert(val, currentNode.left);
    }

    if (val > currentNode.val && currentNode.right) {
      this.insert(val, currentNode.right);
    }
  }

  search(val) {
    // Your code here
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };
