class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class SLL {
	constructor(head = null) {
		this.head = head;
	}
	addFront(value) {
		let new_node = new Node(value);

		if (!this.head) {
			this.head = new_node;
			return this;
		}
		new_node.next = this.head;
		this.head = new_node;
		return this;
	}
	removeFront() {
		this.head = this.head.next;
		if (!this.head) {
			return null;
		}
		return this.head.data;
	}

	front() {
		return this.head.data;
	}
}

let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);
let node4 = new Node(40);

node1.next = node2;
node2.next = node3;
node3.next = node4;

let list = new SLL(node1);

console.log(list.front());

console.log(list.removeFront());
console.log(list.removeFront());
console.log(list.front());
list.addFront(20);
console.log(list.front());
list.addFront(10);
console.log(list.front());
console.log(list.removeFront());
console.log(list.removeFront());
console.log(list.removeFront());
console.log(list.removeFront());
