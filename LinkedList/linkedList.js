//1 - 10 - 5 - 15;

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
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
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.prepend(1);
myLinkedList.printListWForLoop();
myLinkedList.printListWWhileLoop();
