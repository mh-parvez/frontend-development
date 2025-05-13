/*
class className<T> {
  //...
}

class className<K, T> {
  //...
}

class className<T extends TypeA> {
  //...
}
*/

class Stack<T> {
  private elements: T[] = [];
  constructor(private size: number) {}

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  isFull(): boolean {
    return this.elements.length === this.size;
  }

  push(element: T): void {
    if (this.elements.length === this.size) {
      throw new Error("The Stack is overflow");
    }
    this.elements.push(element);
  }

  pop(): T | undefined {
    if (this.elements.length == 0) {
      throw new Error("The stack is empty!");
    }
    return this.elements.pop();
  }
}

let numbers = new Stack<number>(5);

// numbers.push(45);
// numbers.push(348);

console.log(numbers.isEmpty());
console.log(numbers.isFull());
console.log(numbers.pop());

function randBetween(low: number, high: number): number {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

while (!numbers.isFull()) {
  let n = randBetween(1, 10);
  console.log(`Push ${n} into the stack.`);
  numbers.push(n);
}
