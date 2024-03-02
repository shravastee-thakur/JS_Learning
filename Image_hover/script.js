// const one = document.querySelector("#one");
// const img1 = document.querySelector("#one img");

// one.addEventListener("mousemove", (move) => {
//   img1.style.left = move.x + "px";
//   img1.style.top = move.y + "px";
// });

// one.addEventListener("mouseenter", () => {
//   img1.style.opacity = 1;
// });

// one.addEventListener("mouseleave", () => {
//   img1.style.opacity = 0;
// });

const element = document.querySelectorAll(".element");

element.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.childNodes[3].style.opacity = 1;
    item.childNodes[1].style.color = "yellow";
  });
  item.addEventListener("mouseleave", () => {
    item.childNodes[3].style.opacity = 0;
    item.childNodes[1].style.color = "white";
  });
  item.addEventListener("mousemove", (move) => {
    item.childNodes[3].style.left = move.x + "px";
    item.childNodes[3].style.top = move.y + "px";
  });
});
