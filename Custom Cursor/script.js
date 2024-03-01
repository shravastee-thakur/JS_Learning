const main = document.querySelector("#main");
const cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", (move) => {
  cursor.style.left = move.x + "px";
  cursor.style.top = move.y + "px";
});
