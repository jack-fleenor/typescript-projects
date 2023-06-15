"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CDoubleLinkedList = void 0;
var LinkedList_1 = require("./LinkedList");
var Node_1 = require("./Node");
var CDoubleLinkedList = /** @class */ (function (_super) {
    __extends(CDoubleLinkedList, _super);
    function CDoubleLinkedList() {
        return _super.call(this) || this;
    }
    CDoubleLinkedList.prototype.insert = function (_value) {
        var _a;
        var tempNode = new Node_1.CNode(_value);
        if (this.getHead() == null) {
            this.setHead(tempNode);
        }
        else {
            // this.head must not be null
            (_a = this.getHead()) === null || _a === void 0 ? void 0 : _a.setPrevious(tempNode);
            tempNode.setNext(this.getHead());
            this.setHead(tempNode);
        }
    };
    return CDoubleLinkedList;
}(LinkedList_1.CLinkedList));
exports.CDoubleLinkedList = CDoubleLinkedList;
