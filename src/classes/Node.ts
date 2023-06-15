
export interface INodeConstructor {
  previous?: CNode | null;
  value: string | number;
  next?: CNode | null;
}

export class CNode {
  private previous!: CNode | null;
  private value!: string | number;
  private next!: CNode | null;

  constructor(props: string | number) {
    this.setValue(props);
  }
  
  public getPrevious(): CNode | null {
    return this.previous;
  }

  public getValue(): string | number {
    return this.value;
  }

  public getNext(): CNode | null {
    return this.next;
  }

  public setValue(props: string | number): void {
    this.value = props;
  }

  public setNext(_next: CNode | null): void {
    this.next = _next;
  }

  public setPrevious(_previous: CNode | null): void {
    this.previous = _previous;
  }

}
