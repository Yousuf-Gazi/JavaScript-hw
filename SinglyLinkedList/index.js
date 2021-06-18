const Node = require('./Node');
const SinglyLinkedList = require('./SinglyLinkedList');

module.exports = {
    Node,
    SinglyLinkedList,
};

var ll = new SinglyLinkedList();

ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);

// ll.displayLinkedList();
//ll.addAt(12, 200);
ll.addStart(50);
ll.addStart(60);
ll.addAt(1, 70);
ll.addAt(5, 80);
ll.addAt(0, 90);
ll.addAt(9, 100);
//ll.addAt(10, 200);

//ll.deleteAt(11);

// ll.displayLinkedList();

console.log(ll.toString());
