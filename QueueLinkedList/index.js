const Node = require('./Node');
const Queue = require('./Queue');

module.exports = {
    Node,
    Queue,
};

var queuell = new Queue();

//enqueue
queuell.enqueue(10);
queuell.enqueue(20);
queuell.enqueue(30);
queuell.enqueue(40);

//displaying front
queuell.peek();


queuell.dequeue();
queuell.dequeue();

queuell.peek();