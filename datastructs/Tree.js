var Leaf = /** @class */ (function () {
    function Leaf(val) {
        if (val === void 0) { val = 0; }
        this.value = val;
        this.left = null;
        this.right = null;
    }
    Leaf.prototype.getValue = function () {
        return this.value;
    };
    Leaf.prototype.getLeft = function () {
        return this.left;
    };
    Leaf.prototype.getRight = function () {
        return this.right;
    };
    Leaf.prototype.setValue = function (val) {
        this.value = val;
    };
    Leaf.prototype.setLeft = function (leaf) {
        this.left = leaf;
    };
    Leaf.prototype.setRight = function (leaf) {
        this.right = leaf;
    };
    return Leaf;
}());
var Tree = /** @class */ (function () {
    function Tree() {
        this.height = 0;
        this.root = null;
    }
    Tree.prototype.addLeaf = function (val) {
        if (this.root == null) {
            this.root = new Leaf(val);
        }
    };
    return Tree;
}());
