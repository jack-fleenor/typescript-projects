
export class _Node {
  private value: number = 0;
  private next: _Node;
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

export class OrderedLinkedList {
  private head: _Node;

  constructor() {
    this.head = null;
  }

  public Insert(val: number): void {
    let tempNode = new _Node(val);
    if(this.head == null) {
      this.head = tempNode;
    } else {
      if(this.head.GetValue() < val) {
        tempNode.SetNextNode(this.head);
        this.head = tempNode;
      } else {
        this.DeepInsert(tempNode);
      }
    }
  }
  // TODO: FIX THIS FUNCTION, IT DOESN'T WORK!!!!
  public DeepInsert(n: _Node): void {
    let currNode = this.head;
    while(currNode.GetNextNode() != null && 
          currNode.GetNextNode().GetValue() > n.GetValue()){
      console.log(currNode.GetValue());
      currNode = currNode.GetNextNode();
    }
    if(currNode.GetNextNode == null && 
       currNode.GetValue() > n.GetValue()
      ){
        console.log(currNode.GetValue());
      currNode.SetNextNode(n);
    } 
    else if(currNode.GetNextNode() != null && 
              currNode.GetValue() < n.GetValue()
           ){
      n.SetNextNode(currNode.GetNextNode());
      currNode.SetNextNode(n);
    }
  }

  public PrintList(): void {
    let currNode = this.head;
    while(currNode.GetNextNode() != null){
      console.log(`${currNode.GetValue()} points to -> ${currNode.GetNextNode().GetValue()}`)
      currNode = currNode.GetNextNode();
    }
  }

}

export class _LinkedList {
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


let orderedList: OrderedLinkedList = new OrderedLinkedList;

orderedList.Insert(5);
orderedList.Insert(2);
orderedList.Insert(17);
orderedList.Insert(1);

orderedList.PrintList();
