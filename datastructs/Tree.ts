
class Leaf {
  private value: number;
  private left: Leaf | null;
  private right: Leaf | null;

  constructor(val: number = 0){
    this.value = val;
    this.left = null;
    this.right = null;
  }
  
  public getValue(): number {
    return this.value;
  }
  
  public getLeft(): Leaf {
    return this.left;
  }
  
  public getRight(): Leaf {
    return this.right;
  }
  
  public setValue(val: number): void {
    this.value = val;
  }
  
  public setLeft(leaf: Leaf): void {
    this.left = leaf;
  }

  public setRight(leaf: Leaf): void {
    this.right = leaf;
  }

}

class Tree {
  private height: number;
  private root: Leaf | null;

  constructor(){
    this.height = 0;
    this.root = null;
  }
  
  public addLeaf(val: number): void {

    if(this.root == null){
      this.root = new Leaf(val);
    }

  }

}

