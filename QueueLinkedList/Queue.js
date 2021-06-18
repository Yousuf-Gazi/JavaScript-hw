const Node = require('./Node');

class Queue {
    constructor() {
        this.rear = null;
        this.front = null;
    }

    //adding element to the queue
    enqueue(data) {
        var node = new Node(data);

        //for first enqueue
        if (this.front == null) {
            this.front = node;
            this.rear = node;
        }else {
            //for next incoming enqueue
            this.rear.next = node;
            this.rear = node; //updating pointer
        }
    }

    //front element on the queue
    peek() {
        if (this.rear == null && this.front == null) {
            console.log("The queue is empty");
        }else {
            console.log("Front element is " + this.front.data);
        }
    }

    //removing element from queue
    dequeue () {
        this.front = this.front.next;

        //if the queue becomes empty
        if (this.front == null) {
            this.rear = null;
        }
    }
}

module.exports = Queue;