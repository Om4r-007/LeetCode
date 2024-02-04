Array.prototype.last = function() {
    if (this.length > 0) {
      return this[this.length - 1]
    } else {
      return -1
    } 
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */