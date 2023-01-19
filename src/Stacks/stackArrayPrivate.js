const items = new WeakMap();

class Stack {
  constructor() {
    items.set(this, []);
  }
  #count = 0;
  push(element) {
    const value = items.get(this);
    value.push(element);
  }

  pop() {
    const value = items.get(this);
    return value.pop();
  }

  peek() {
    const value = items.get(this);
    return value[value.length - 1];
  }

  isEmpty() {
    const value = items.get(this);
    return value.length === 0;
  }

  size() {
    console.log(items.get(this));
    const value = items.get(this);
    return value.length;
  }

  clear() {
    const value = items.get(this);
    value = [];
  }
}

var stack = new Stack();
stack.push(10);
stack.push(8);
console.log(stack.size());
console.log(stack.isEmpty());
