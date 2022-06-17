const circle = document.getElementById("circle");
const input = document.querySelector("input");

function foo() {
  let temp;
  if (input.value * 1 <= 0) {
    return alert("Enter a positive number");
  } else temp = input.value * 1;

  let oval = document.createElement("div");
  oval.innerText = temp;
  oval.className = "oval";

  circle.appendChild(oval);

  setInterval(() => {
    oval.innerText = --temp;
    if (temp == -1) {
      oval.remove();
    }
  }, 1000);
}
