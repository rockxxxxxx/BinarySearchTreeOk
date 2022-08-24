class node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class bst {
  constructor() {
    this.root = null;
  }

  insert(data) {
    var newNode = new node(data);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertnewNode(this.root, newNode);
    }
  }
  insertnewNode(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertnewNode(root.left, newNode);
      }
    } else {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertnewNode(root.right, newNode);
      }
    }
  }
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }
  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }
  search(node, data) {
    if (node === null) return null;
    else if (data < node.data) return this.search(node.left, data);
    else if (data > node.data) return this.search(node.right, data);
    else return node;
  }
}

const bs = new bst();
bs.insert(4);
bs.insert(2);
bs.insert(7);
bs.insert(1);
bs.insert(3);
bs.insert(5);
bs.remove(5);

console.log(bs);
