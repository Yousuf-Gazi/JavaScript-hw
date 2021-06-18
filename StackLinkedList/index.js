const Node = require('./Node');
const Stack = require('./Stack');

module.exports = {
    Node,
    Stack,
};

var stackll = new Stack();

//pushing
stackll.push(10);
stackll.push(20);
stackll.push(30);
stackll.push(40);

//displaying top
stackll.peek();

//poping
stackll.pop();
stackll.pop();

stackll.peek();
