import { CNode } from "./Node.js";
export class CLinkedList {
    constructor() {
        this.size = 0;
        this.setHead(null);
        this.size = 0;
    }
    getHead() {
        return this.head;
    }
    getSize() {
        return this.size;
    }
    setHead(_head) {
        this.head = _head;
    }
    incrementSize() {
        this.size += 1;
    }
    decrementSize() {
        this.size -= 1;
    }
    insert(_value) {
        const tempNode = new CNode(_value);
        if (this.head == null) {
            this.head = tempNode;
        }
        else {
            tempNode.setNext(this.head);
            this.head = tempNode;
        }
    }
}
