"use strict";
exports.__esModule = true;
exports.CLinkedList = void 0;
var Node_1 = require("./Node");
var CLinkedList = /** @class */ (function () {
    function CLinkedList() {
        this.size = 0;
        this.setHead(null);
        this.size = 0;
    }
    CLinkedList.prototype.getHead = function () {
        return this.head;
    };
    CLinkedList.prototype.getSize = function () {
        return this.size;
    };
    CLinkedList.prototype.setHead = function (_head) {
        this.head = _head;
    };
    CLinkedList.prototype.incrementSize = function () {
        this.size += 1;
    };
    CLinkedList.prototype.decrementSize = function () {
        this.size -= 1;
    };
    CLinkedList.prototype.insert = function (_value) {
        console.log(_value);
        // const { value } = _value;
        var tempNode = new Node_1.CNode(_value);
        if (this.head == null) {
            this.head = tempNode;
        }
        else {
            tempNode.setNext(this.head);
            this.head = tempNode;
        }
    };
    return CLinkedList;
}());
exports.CLinkedList = CLinkedList;
