var _Node = /** @class */ (function () {
    function _Node(val) {
        this.value = 0;
        this.next = null;
        this.value = val;
    }
    _Node.prototype.SetNextNode = function (node) {
        this.next = node;
    };
    _Node.prototype.GetValue = function () {
        return this.value;
    };
    _Node.prototype.GetNextNode = function () {
        return this.next;
    };
    return _Node;
}());
var _LinkedList = /** @class */ (function () {
    function _LinkedList() {
        this.head = null;
        this.head = null;
    }
    _LinkedList.prototype.Insert = function (val) {
        var tempNode = new _Node(val);
        tempNode.SetNextNode(this.head);
        this.head = tempNode;
    };
    _LinkedList.prototype.Traverse = function () {
        var currentNode = this.head;
        while (currentNode != null) {
            console.log(currentNode.GetValue());
            currentNode = currentNode.GetNextNode();
        }
    };
    return _LinkedList;
}());
var list = new _LinkedList;
list.Insert(25);
list.Insert(30);
list.Insert(35);
list.Traverse();
