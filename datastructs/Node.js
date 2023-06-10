var _Node = /** @class */ (function () {
    function _Node(val) {
        this.value = 0;
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
var OrderedLinkedList = /** @class */ (function () {
    function OrderedLinkedList() {
        this.head = null;
    }
    OrderedLinkedList.prototype.Insert = function (val) {
        var tempNode = new _Node(val);
        if (this.head == null) {
            this.head = tempNode;
        }
        else {
            if (this.head.GetValue() < val) {
                tempNode.SetNextNode(this.head);
                this.head = tempNode;
            }
            else {
                this.DeepInsert(tempNode);
            }
        }
    };
    OrderedLinkedList.prototype.DeepInsert = function (n) {
        var currNode = this.head;
        while (currNode.GetNextNode() != null &&
            currNode.GetNextNode().GetValue() > n.GetValue()) {
            console.log(currNode.GetValue());
            currNode = currNode.GetNextNode();
        }
        if (currNode.GetNextNode == null &&
            currNode.GetValue() > n.GetValue()) {
            console.log(currNode.GetValue());
            currNode.SetNextNode(n);
        }
        else if (currNode.GetNextNode() != null &&
            currNode.GetValue() < n.GetValue()) {
            n.SetNextNode(currNode.GetNextNode());
            currNode.SetNextNode(n);
        }
    };
    OrderedLinkedList.prototype.PrintList = function () {
        var currNode = this.head;
        while (currNode.GetNextNode() != null) {
            console.log("".concat(currNode.GetValue(), " points to -> ").concat(currNode.GetNextNode().GetValue()));
            currNode = currNode.GetNextNode();
        }
    };
    return OrderedLinkedList;
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
var orderedList = new OrderedLinkedList;
orderedList.Insert(5);
orderedList.Insert(2);
orderedList.Insert(17);
orderedList.Insert(1);
orderedList.PrintList();
