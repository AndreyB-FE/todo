npm i
npm run dev

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
  smallestInBranch() {
    let current = this;
    while (current) {
      if (!current.left) return current;
      current = current.left;
    }
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (value === current.value) return undefined;
      if (value > current.value) {
        if (current.right) current = current.right;
        else {
          newNode.parent = current;
          current.right = newNode;
        }
      } else {
        if (current.left) current = current.left;
        else {
          newNode.parent = current;
          current.left = newNode;
        }
      }
    }
  }

  biggestEl() {
    let current = this.root;
    while (current) {
      if (!current.right) return current;
      current = current.right;
    }
  }
  toSortedArray() {
    let arr = [];
    let current = this.root;
    const biggest = this.biggestEl().value;
    let prev = null;
    while (current.value !== biggest) {
      current = current.smallestInBranch();
      arr.push(current.value);

      if (current.right || current === this.root) {
        if (current.right.value === prev) {
          arr.pop();
          prev = current.value;
          current.right = null;
        } else {
          prev = current.value;
          current = current.right;
          continue;
        }
      }
      if (!current.right) {
        prev = current.value;
        current = current.parent;
        current.left = null;
      }
    }
    arr.push(biggest);
    return arr;
  }

  balance() {
    let newTree = new BinaryTree();
    const sortedArr = this.toSortedArray();
    const middle = Math.round(sortedArr.length / 2);
    const rootEl = sortedArr[middle];
    newTree.insert(rootEl);
    for (let i = middle; i >= 0; i--) {
      if (sortedArr[i] === rootEl) continue;
      newTree.insert(sortedArr[i]);
      newTree.insert(sortedArr[sortedArr.length - 1 - i]);
    }
    return newTree;
  }
}

let tree = new BinaryTree();

tree.insert(12);
tree.insert(6);
tree.insert(3);
tree.insert(7);
tree.insert(8);
tree.insert(9);
tree.insert(16);
tree.insert(14);
tree.insert(18);
tree.insert(2);

console.log(tree.balance());
