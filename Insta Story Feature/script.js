let arr = [
  { dp: "images/dp1.jpg", story: "images/story1.jpg" },
  { dp: "images/dp2.jpg", story: "images/story2.jpg" },
  { dp: "images/dp3.jpg", story: "images/story3.jpg" },
  { dp: "images/dp4.jpg", story: "images/story4.jpg" },
];

const stories = document.querySelector("#stories");
const screen = document.querySelector("#screen");
const btn = document.querySelector("#btn");

let clutter = "";
arr.forEach((item, idx) => {
  clutter += `<div class="story">
  <img id="${idx}" src="${item.dp}" alt="">
</div>`;
});

stories.innerHTML = clutter;
stories.addEventListener("click", (e) => {
  screen.style.display = "block";
  screen.style.backgroundImage = `url(${arr[e.target.id].story})`;
  btn.style.contentVisibility = "visible";
});
btn.addEventListener("click", () => {
  screen.style.display = "none";
});
