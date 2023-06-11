import { CLinkedList } from "./LinkedList";

let linkedList = new CLinkedList();

linkedList.insert(0);
linkedList.insert(22);
linkedList.insert(15);

console.log(`Head node: ${linkedList.getHead()?.getValue()}`);
console.log(`Next node: ${linkedList.getHead()?.getNext()?.getValue()}`)
console.log(`Last node: ${linkedList.getHead()?.getNext()?.getNext()?.getValue()}`)
