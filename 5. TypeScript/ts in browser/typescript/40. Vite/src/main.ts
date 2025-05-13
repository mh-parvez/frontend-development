import "./style.css";
import add from "./utils/add";

const app = document.querySelector<HTMLDivElement>("#app");

const sum = add(23, 23, 4);

app!.innerHTML = `
  <h1>Hello, TypeScript!</h1> 
  <p><b>Sum: </b> ${sum}</p>
`;
