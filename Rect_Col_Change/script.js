const rectangle = document.querySelector("#center");

rectangle.addEventListener("mousemove", (details) => {
  let rectLocation = rectangle.getBoundingClientRect();
  let insideRect = details.clientX - rectLocation.left;

  if (insideRect < rectLocation.width / 2) {
    let redColor = gsap.utils.mapRange(
      0,
      rectLocation.width / 2,
      255,
      0,
      insideRect
    );
    gsap.to(rectangle, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
      ease: Power4,
    });
  } else {
    let blueColor = gsap.utils.mapRange(
      rectLocation.width / 2,
      rectLocation.width,
      0,
      255,
      insideRect
    );
    gsap.to(rectangle, {
      backgroundColor: `rgb(0, 0,${blueColor})`,
      ease: Power4,
    });
  }
});

rectangle.addEventListener("mouseleave", () => {
  gsap.to(rectangle, {
    backgroundColor: "white",
  });
});
