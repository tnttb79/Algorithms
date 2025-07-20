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
  }

  prepend(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  insert(index, value) {
    const newNode = new Node(value);
    const preNode = this.traverseToIndex1(index - 1);
    const nextNode = this.traverseToIndex1(index);
    preNode.next = newNode;
    newNode.next = nextNode;
  }
  traverseToIndex(index) {
    let targetNode = this.head;
    for (let i = 0; i < index; i++) {
      targetNode = targetNode.next;
    }
    return targetNode;
  }
  traverseToIndex1(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
  }
}

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
myLinkedList.printListWForLoop();
