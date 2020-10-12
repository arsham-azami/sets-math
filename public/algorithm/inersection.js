"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Intersection {
    constructor(arrOne, arrTwo) {
        this.arrOne = arrOne;
        this.arrTwo = arrTwo;
        this.newArr = [];
    }
    intersection() {
        for (let x = 0; x < this.arrOne.length; x++) {
            if (this.arrTwo.includes(this.arrOne[x])) {
                this.newArr.push(this.arrOne[x]);
            }
        }
        return this.newArr;
    }
}
exports.default = Intersection;
