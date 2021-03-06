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

    if (val < currentNode.val) {
      this.insert(val, currentNode.left);
    }

    if (val > currentNode.val) {
      this.insert(val, currentNode.right);
    }
  }

  search(val, currentNode = this.root) {
    if (!currentNode) return false;

    if (val === currentNode.val) return true;

    if (val < currentNode.val) {
      return this.search(val, currentNode.left);
    }

    if (val > currentNode.val) {
      return this.search(val, currentNode.right);
    }
  }

  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    const queue = [this.root];

    while (queue.length > 0) {
      const firstNode = queue.shift();

      console.log(firstNode.val);

      if (firstNode.left) {
        queue.push(firstNode.left);
      }

      if (firstNode.right) {
        queue.push(firstNode.right);
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    const stack = [this.root];

    while (stack.length > 0) {
      const lastNode = stack.pop();

      console.log(lastNode.val);

      if (lastNode.left) {
        stack.push(lastNode.left);
      }

      if (lastNode.right) {
        stack.push(lastNode.right)
      }
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
