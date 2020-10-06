const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (this.chain !== undefined) {
      this.chain = [...this.chain, `( ${value} )`];
    } else {
      this.chain = [`( ${value} )`];
    }
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' && position % 1 !== 0) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice((position - 1), 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
