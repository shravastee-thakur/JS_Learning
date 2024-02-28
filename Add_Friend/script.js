const text = document.querySelector("h5");
const add = document.querySelector("#add");
let check = 0;

add.addEventListener("click", () => {
  if (check == 0) {
    text.textContent = "Friend";
    // add.style.backgroundColor = "green";
    text.style.color = "green";
    add.textContent = "Remove Friend";
    check = 1;
  } else {
    text.textContent = "Stranger";
    // add.style.backgroundColor = "orange";
    text.style.color = "red";
    add.textContent = "Add Friend";
    check = 0;
  }
});
