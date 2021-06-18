const Node = require('./Node');

module.exports = {
    Node,
};

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //add element at the end of linked-list
    add(data) {
        //create new node
        var node = new Node(data);
        var current;

        //check the list is empty
        if (this.head == null) {
            this.head = node;
        }else {
            current = this.head;

            //to traverse to the end of the list
            while (current.next) {
                current = current.next;
            }

            //add node
            current.next = node;
        }
        this.size++;
    }

    //add at the start of the linked list
    addStart(data) {
        var node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    // add at the specific position or index
    addAt(index, data) {
        var node = new Node(data);

        if (index < 0 || index > this.size) {
            console.log("this index " + index + "th position is not from current list position 0 to " + this. size);
            this.size--;
        }else if (index == 0) {
            this.addStart(data);
            this.size--;
        }else if (index == this.size) {
            this.add(data);
            this.size--;
        }else {
            var temp = this.head;
            for (var i = 0; i < index - 1; i++) {
                temp = temp.next;
            }

            //updating new nodes pointer to next node
            node.next = temp.next;
            //updating previous node's pointer to new node
            temp.next = node;
        }
        this.size++;
    }

    //delete at the specific position or index
    deleteAt (index) {
        if (index < 0 || index > this.size - 1) {
            console.log("Deleting index " + index + "th position is not from current list position 0 to " + (this.size - 1));
        }else if (index == 0) {
            this.head = this.head.next;
            this.size--;
        }else {
            var node = this.head;
            var deletedNode;

            for (var i = 0; i < index - 1; i++) {
                node = node.next;
            }

            deletedNode = node.next;
            node.next = deletedNode.next;
            console.log("Deleted node is " + deletedNode.data);
            this.size--;
        }
    }


    //display
    // displayLinkedList() {
    //     var current = this.head;
    //     var string = "";

    //     if (this.head == null) {
    //         console.log("Linked-list is empty!");
    //     }else {
    //         while (current) {
    //             //display without String
    //             //console.log(current.data + " ");
    
    //             string += current.data + " ";
    //             current = current.next;
    //         }
    //         console.log(string);
    //     }
    // }

    //visualize linked list
    toString() {
        return JSON.stringify(this, null, 4);
    }
}

module.exports = SinglyLinkedList;