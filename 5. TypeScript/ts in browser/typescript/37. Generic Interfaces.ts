/*
interface interfaceName<T> {
  // ...
}

interface interfaceName<U,V> {
  // ...
}

interface interfaceName<U,V> {
  // ...
}
*/

interface Pair<K, V> {
  key: K;
  value: V;
}

let month: Pair<string, number> = {
  key: "Jan",
  value: 1,
};

console.log(month);

interface Collection<T> {
  add(o: T): void;
  remove(o: T): void;
}

class List<T> implements Collection<T> {
  private items: T[] = [];

  add(o: T): void {
    this.items.push(o);
  }
  remove(o: T): void {
    let index = this.items.indexOf(o);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}

let list = new List<number>();

for (let i = 0; i < 10; i++) {
  list.add(i);
}

interface Options<T> {
  [name: string]: T;
}

let inputOptions: Options<boolean> = {
  disabled: false,
  visible: true,
};
