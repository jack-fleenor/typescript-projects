export class CNode {
    constructor(props) {
        this.setValue(props);
    }
    getPrevious() {
        return this.previous;
    }
    getValue() {
        return this.value;
    }
    getNext() {
        return this.next;
    }
    setValue(props) {
        this.value = props;
    }
    setNext(_next) {
        this.next = _next;
    }
    setPrevious(_previous) {
        this.previous = _previous;
    }
}
