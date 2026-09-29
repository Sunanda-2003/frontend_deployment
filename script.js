// DevOps lifecycle stages
const stages = ["Plan", "Code", "Build", "Test", "Release", "Deploy", "Operate", "Monitor"];
const list = document.getElementById("stages");
const btn = document.getElementById("btn");
let index = 0;

btn.addEventListener("click", () => {
  if (index < stages.length) {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${stages[index++]}`;
    list.appendChild(li);
  }
  if (index === stages.length) { btn.textContent = "All Stages Shown ✔"; btn.disabled = true; }
});
