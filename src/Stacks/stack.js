class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${stack.items[0].name}, ${stack.items[0].age};`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString} ${this.items[i].name}, ${stack.items[0].age}`;
    }
    return objString;
  }

  decimalToBinary(decimalNumber) {
    const stack = new Stack();
    let number = decimalNumber;
    let binaryString = "";
    while (number > 0) {
      stack.push(Math.floor(number % 2));
      number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
      binaryString += stack.pop().toString();
    }
    return binaryString;
  }

  baseConverter(decimalNumber, base) {
    const stack = new Stack();
    let number = decimalNumber;
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWZYZ";
    let baseString = "";
    while (!base >= 2 && base <= 36) {
      return "";
    }
    while (number > 0) {
      stack.push(Math.floor(number % base));
      number = Math.floor(number / base);
    }
    while (!stack.isEmpty()) {
      baseString += digits[stack.pop()];
    }
    return baseString;
  }
}

const stack = new Stack();

console.log(stack.baseConverter(100345, 16));
