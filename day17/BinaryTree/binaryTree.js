// create a class binary tree with methods to inserting values and performing in-order traversal
class treeNode {
  constructor(value) {
    (this.value = value), (this.left = null), (this.right = null);
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new treeNode(value);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal(node, result = []) {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  displayInOrder() {
    const result = this.inOrderTraversal(this.root);
    console.log(result.join(" "));
  }

    visualize(node = this.root, spaceCount = 0, label = 'Root:') {
    const SPACE_GAP = 10;
    if (node !== null) {
      spaceCount += SPACE_GAP;
      this.visualize(node.right, spaceCount, 'R---');
      console.log('\n' + ' '.repeat(spaceCount - SPACE_GAP) + label + node.value);
      this.visualize(node.left, spaceCount, 'L---');
    }
  }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(2);
tree.insert(8);
tree.insert(1);
tree.insert(3);
tree.insert(7);
tree.insert(9);
tree.displayInOrder(); 
tree.visualize();

/*Output -----------
1 2 3 5 7 8 9
tree visualization
                    R---9

          R---8

                    L---7

Root:5

                    R---3

          L---2

                    L---1
*/
