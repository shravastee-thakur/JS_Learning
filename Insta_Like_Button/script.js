const container = document.querySelector("#container");
const heart = document.querySelector("i");

container.addEventListener("dblclick", () => {
  heart.style.transform = "translate(-50%, -50%) scale(1)";
  heart.style.opacity = 0.8;

  setTimeout(() => {
    heart.style.opacity = 0;
  }, 1000);

    setTimeout(() => {
      heart.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000);
});
