const input = document.querySelector("input");
const p = document.querySelector("span");

input.addEventListener("input", (e) => {
  localStorage.setItem("name", e.target.value);
});
p.innerText = localStorage.getItem("name");

input.addEventListener("blur", (e) => {
  location.reload();
});

const form = document.querySelector("form");
const list = document.querySelector("ul");

const userdata = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.name.value.trim();
  const age = e.target.age.value.trim();

  if (!name || !age) {
    alert("Please fill in both name and age.");
    return;
  }

  if (isNaN(age) || age < 15) {
    alert("Please enter a valid non-negative number for age.");
    return;
  }

  userdata.push({
    name,
    age: Number(age),
  });

  localStorage.setItem("users", JSON.stringify(userdata));
  e.target.reset();

  const li = document.createElement("li");
  li.innerText = `Name: ${name}, Age: ${age}`;
  list.appendChild(li);
});

const clearBtn = document.querySelector(".clearBtn");

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("users");
  list.innerHTML = ''
  console.log("User data cleared");
});
