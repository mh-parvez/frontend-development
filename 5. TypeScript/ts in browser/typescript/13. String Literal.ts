let click: "click";
click = "click"; // valid

let mouseEvent: "click" | "dblclick" | "mouseup" | "mousedown";
mouseEvent = "click"; // valid
mouseEvent = "dblclick"; // valid
mouseEvent = "mouseup"; // valid
mouseEvent = "mousedown"; // valid
// mouseEvent = 'mouseover'; // compiler error

// 💡 If you use the string literal types in multiple places, they will be verbose.
// 💡 To avoid this, you can use the type aliases. For example:

type MyMouseEvent = "click" | "dblclick" | "mouseup" | "mousedown";
let mouseEventAlias: MyMouseEvent;
mouseEventAlias = "click"; // valid
mouseEventAlias = "dblclick"; // valid
mouseEventAlias = "mouseup"; // valid
mouseEventAlias = "mousedown"; // valid
// mouseEventAlias = 'mouseover'; // compiler error

let anotherEvent: MyMouseEvent;
