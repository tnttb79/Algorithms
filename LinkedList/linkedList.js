class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
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
console.log(myLinkedList);
