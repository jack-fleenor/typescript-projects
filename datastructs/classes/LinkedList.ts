import { CNode } from "./Node";
export class CLinkedList {
  private head: CNode | null;
  private size: number = 0;

  constructor(){
    this.setHead(null)
    this.size = 0;
  }

  public getHead(): CNode | null {
    return this.head;
  }

  public getSize(): number {
    return this.size;
  }

  public setHead(_head: CNode | null): void {
    this.head = _head;
  }

  public incrementSize(): void {
    this.size += 1;
  }

  public decrementSize(): void {
    this.size -= 1;
  }

  public insert(_value: string | number): void {
    let tempNode = new CNode(_value);
    if(this.head == null){
      this.head = tempNode;
    } else {
      tempNode.setNext(this.head);
      this.head = tempNode;
    }
  }

}
