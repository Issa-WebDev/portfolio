const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (scrollY > 40) {
    header.classList.add("navbar");
  } else {
    header.classList.remove("navbar");
  }
});
