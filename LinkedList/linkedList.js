//1 - 10 - 5 - 15;

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  printListWForLoop() {
    const arrayOfNodes = [];
    for (
      let currentNode = this.head;
      currentNode !== null;
      currentNode = currentNode.next
    ) {
      arrayOfNodes.push(currentNode.value);
    }
    console.log(this.listToString(arrayOfNodes));
  }

  printListWWhileLoop() {
    let currentNode = this.head;
    const arrayOfNodes = [];
    while (currentNode !== null) {
      arrayOfNodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(this.listToString(arrayOfNodes));
  }

  listToString(arr) {
    let stringBuilder = "";
    arr.forEach((e, i) => {
      if (i == arr.length - 1) {
        stringBuilder += e;
      } else {
        stringBuilder += e + "-->";
      }
    });
    return stringBuilder;
  }
  append(val) {
    const newNode = new Node(val);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    console.log(`this value was appended ${val}`);
  }

  prepend(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    console.log(`this value was prepended ${val}`);
  }
  insert(index, value) {
    // prepend if <= 0
    if (index <= 0) return this.prepend(value);
    // append if >= list length
    if (index >= this.length) return this.append(value);
    const newNode = new Node(value);
    const preNode = this.traverseToIndex(index - 1);
    const nextNode = this.traverseToIndex(index);
    preNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return this.printListWForLoop();
  }
  traverseToIndex(index) {
    let targetNode = this.head;
    for (let i = 0; i < index; i++) {
      targetNode = targetNode.next;
    }
    return targetNode;
  }
}

// class for a node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const myLinkedList = new LinkedList(0);
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.printListWForLoop();
myLinkedList.printListWWhileLoop();
console.log(myLinkedList.traverseToIndex(0));
console.log(myLinkedList.traverseToIndex(5));
myLinkedList.insert(10, 6);
myLinkedList.insert(0, 15);
myLinkedList.printListWForLoop();
