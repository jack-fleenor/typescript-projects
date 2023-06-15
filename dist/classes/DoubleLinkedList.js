import { CLinkedList } from "./LinkedList";
import { CNode } from "./Node";
export class CDoubleLinkedList extends CLinkedList {
    constructor() {
        super();
    }
    insert(_value) {
        let tempNode = new CNode(_value);
        if (this.getHead() == null) {
            this.setHead(tempNode);
        }
        else {
            // this.head must not be null
            this.getHead()?.setPrevious(tempNode);
            tempNode.setNext(this.getHead());
            this.setHead(tempNode);
        }
    }
}
