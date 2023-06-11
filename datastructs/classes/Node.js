"use strict";
exports.__esModule = true;
exports.CNode = void 0;
var CNode = /** @class */ (function () {
    function CNode(props) {
        this.setValue(props);
    }
    CNode.prototype.getPrevious = function () {
        return this.previous;
    };
    CNode.prototype.getValue = function () {
        return this.value;
    };
    CNode.prototype.getNext = function () {
        return this.next;
    };
    CNode.prototype.setValue = function (props) {
        this.value = props;
    };
    CNode.prototype.setNext = function (_next) {
        this.next = _next;
    };
    CNode.prototype.setPrevious = function (_previous) {
        this.previous = _previous;
    };
    return CNode;
}());
exports.CNode = CNode;
