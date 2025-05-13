function greet() {
  console.log("Hello!");
}

const button = document.querySelector("button");
let box = document.querySelector(".box");

button.addEventListener("click", () => {
  greet();
  if (box.style.opacity === "0.5") {
    box.style.opacity = "1";
    box.style.width = "100%";
  } else {
    box.style.opacity = "0.5";
    box.style.width = "0px";
  }
});

const card = document.querySelector(".card");
const cardContainer = document.querySelector(".card-container");
console.log(cardContainer)
let count = 1;
card.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerText = count;
  count++;
  cardContainer.append(div);
});

const userinput = document.querySelector("input");
const result = document.querySelector(".result");

userinput.addEventListener("input", (e) => {
  console.log(e.target.value);
  userinput.style.width = "450px";
});

userinput.addEventListener("change", (e) => {
  console.log(e.target.value);
  result.innerText = e.target.value;
  userinput.style.width = "350px";
});

const usersdata = [];
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.username.value);
  console.log(e.target.email.value);

  const data = {
    name: e.target.username.value,
    email: e.target.email.value,
  };
  usersdata.push(data);
  console.log(usersdata);
});

const div = document.querySelectorAll("div");
document.body.addEventListener("keypress", (e) => {
  console.log(e.key);
  if (e.key === "d") {
    document.body.style.background = "#FFF";
    document.body.style.color = "#000";
    div.forEach((d) => (d.style.background = "#3C3C3C"));
    form.style.background = "#3C3C3C";
  } else if (e.key === "l") {
    document.body.style.background = "#3C3C3C";
    document.body.style.color = "#fff";
    div.forEach((d) => (d.style.background = "#FFF"));
    form.style.background = "#FFF";
  }
});

/* 
document.body.addEventListener("keydown", (e) => {
  console.log(e.key)
    document.body.style.background = "#FFF";
    document.body.style.color = "#000";
    div.forEach(d => d.style.background = "#3C3C3C")
    form.style.background = "#3C3C3C";
})

document.body.addEventListener("keyup", (e) => {
  console.log(e.key)
  document.body.style.background = "#3C3C3C";
  document.body.style.color = "#fff";
  div.forEach(d => d.style.background = "#FFF")
  form.style.background = "#FFF";
})
*/

// ✅ Event Bubbling and Capturing:
const contianerBox = document.querySelector(".container-box");
const greenBox = document.querySelector(".green-box");
const blueBox = document.querySelector(".blue-box");

contianerBox.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("container box fired");
  console.log(e);
});
greenBox.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("green box fired");
});

/* 
blueBox.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log("blue box fired");
})
*/

blueBox.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("blue box fired");
  },
  {
    once: true, //💡 run event onece
  }
);

setTimeout(() => {
  userinput.focus();
}, 1000);

setTimeout(() => {
  userinput.blur();
}, 3000);

let timer = 1;
const id = setInterval(() => {
  if (timer > 10) clearInterval(id);
  else {
    card.click();
    timer++;
  }
}, 5);

// ✅ Event Delegation:
cardContainer.addEventListener('click', (e) => {
  console.log(e.target);
  if(e.target != cardContainer) {
    e.target.remove();
    cardContainer
  }
})
