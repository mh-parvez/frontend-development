// ▶ Document Object Model:

console.dir(document);
console.log(document.body.children[0]);
console.log(document.body.children[0].innerText);

document.body.children[0].innerText = "JavaScript";
document.body.children[0].innerHTML = "<i>JavaScript</i>";

const fruites = ["mango", "banana", "apple"];
document.body.children[0].innerHTML = `${fruites.join(", ")}`;

// ▶ Selecting Elements:

const h1 = document.querySelector("h1");
h1.innerText = "Sunny Day";
console.log(h1);

all_p = document.querySelectorAll("p");
console.log(all_p);

all_p.forEach((p, i) => {
  p.innerText = "Paragraph using forEach " + i;
});

// ▶ textContent, innerText, innerHTML:

const p = document.querySelector("p");

p.textContent = "Lorem       ipsum     dolor     site";
p.innerText = "Lorem ipsum dolor sit";
p.innerHTML = "<b>Lorem ipsum <mark>dolor</mark> sit</b>";

p.innerText = "<i>Lorem ipsum <mark>dolor</mark> sit</i>";
p.textContent = "<i>Lorem ipsum <mark>dolor</mark> sit</i>";

console.log(p.textContent);

// ▶ getAttribute, setAttribute:

console.log(p.getAttribute("class"));
p.setAttribute("class", "new-attribute");
p.removeAttribute("class");
console.log(p.hasAttribute("class"));

console.log(p);

const input = document.querySelector("#username");
console.log(input);
console.log(input.value);
input.value = "Parvez";
console.log(input.value);

p.className = "add-now";
p.classList = "main-content";
p.classList.add("card");
console.log(p);
console.log(p.classList.contains("card"));
p.classList.remove("main-content");
console.log(p);

// ▶ style:

h1.style.color = "hotpink";
input.style.padding = ".5em 1.3em";

input.style.cssText = `
    width: 300px;
    border: none;
    background-color: orangered;
    padding: .5em 1.3em;
`;

// ▶ Parent Sibling & Children:

const div = document.querySelector("div");

console.log(p.parentElement);
console.log(p.parentElement.parentElement);

console.log(div.children);
console.log(div.childNodes);

console.log(div.firstElementChild);
console.log(div.lastElementChild);

console.log(div.previousElementSibling);
console.log(div.nextElementSibling);

// ▶ appnedChild & append:

const container = document.querySelector(".container");
container.appendChild(h1.cloneNode(h1));
container.appendChild(h1.cloneNode(h1));

container.append("hello", h1, "world"); // allow text & multiple element

console.log(container);

for (let i = 1; i < 40; i++) {
  const newDiv = div.cloneNode();
  newDiv.innerText = i;
  container.append(newDiv);
}

// ▶ createElement:

const img = document.createElement("img");

img.classList.add("cartoon-img");
img.src = "https://play-lh.googleusercontent.com/s6ZPBs_7SxZ0ep2iPBi_cO56q5X4q1ktD836SCyevS4gNXVsxW9xSTe3GFnxKUZoagjdLl8sHzc=w648-h364-rw";
img.alt = "pokemon-img";
img.id = "pokemon-img";
img.style.maxWidth = "100%";

document.body.appendChild(img);

// ▶ removeElement:

img.remove();
container.removeChild(h1);
