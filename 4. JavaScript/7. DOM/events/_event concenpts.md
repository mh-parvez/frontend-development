
## 🔰 What is Event Bubbling?

Event bubbling is the default mode of event propagation in the DOM. When an event is triggered on a child element, it bubbles up through its parent elements, triggering the same event listeners on each ancestor unless `event.stopPropagation()` is called.

### Example:
Clicking on a `<button>` inside a `<div>` will first trigger the button's event handler, then the div's (if both have click listeners).

## 🔄 What is Event Capturing?

Event capturing (or "trickling") is the opposite of bubbling. Events start from the outermost element and propagate inward to the target element. Capturing can be enabled by passing `true` as the third argument to `addEventListener`.

### Example:
Clicking a `<button>` inside a `<div>` will first trigger the div's event handler, then the button's (when using capturing).

## Sample Code Snippet

```js
// Bubbling (default)
element.addEventListener('click', () => {
  console.log('Bubbling phase');
});

// Capturing
element.addEventListener('click', () => {
  console.log('Capturing phase');
}, true);
