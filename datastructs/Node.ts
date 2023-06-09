
class _Node {
  private value: number = 0;
  private next: _Node = null;
  constructor(val: number){
    this.value = val;
  }
  public SetNextNode(node: _Node): void {
    this.next = node;
  }
  public GetValue(): number {
    return this.value;
  }
  public GetNextNode(): _Node {
    return this.next;
  }
}

class _LinkedList {
  private head: _Node = null;
  constructor() {
    this.head = null;
  }
  public Insert(val: number)
  {
    let tempNode = new _Node(val);
    tempNode.SetNextNode(this.head);
    this.head = tempNode;
  }
  public Traverse()
  {
    let currentNode = this.head;
    while(currentNode != null)
    {
      console.log(currentNode.GetValue())
      currentNode = currentNode.GetNextNode();
    }
  }
}

