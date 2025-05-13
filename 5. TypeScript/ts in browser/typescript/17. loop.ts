for (let i = 0; i < 10; i++) {
  console.log(i);
}

let counter = 0;
while (counter < 5) {
  console.log(counter);
  counter++;
}

const Items = ` 
    <ul id="list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul> `;

let list = document.querySelector("#list");

while (list?.firstChild) {
  list.removeChild(list.firstChild);
}
