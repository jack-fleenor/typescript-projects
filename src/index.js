#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
function sum(num_a, num_b) {
    return num_a + num_b;
}
console.log(sum(8, 4));
console.log(chalk_1.default.bgGreen('hello world'));
