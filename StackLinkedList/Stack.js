const Node = require('./Node');

module.exports = {
    Node,
};

class Stack {
    constructor() {
        this.top = null;
    }

    //add element at the top of Stack
    push(data) {
        var node = new Node(data);

        node.next = this.top;
        this.top = node;
    }

    //finding top and checking if the stack is empty or not
    peek() {
        if (this.top == null) {
            console.log("The stack is empty");
        }else {
            console.log("Top is " + this.top.data);
        }
    }

    //poping a top element from the stack
    pop() {
        this.top = this.top.next;
    }
}

module.exports = Stack;