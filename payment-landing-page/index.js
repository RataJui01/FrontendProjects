const menuButton = document.querySelector(".menuBtn");
const closeIcon = document.querySelector(".closeBtn i");
const navLinkContainer = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
  menuButton.style.display = "none";
  closeIcon.style.display = "block";
  navLinkContainer.style.display = "flex";
});

closeIcon.addEventListener("click", function () {
  menuButton.style.display = "flex";
  closeIcon.style.display = "none";
  navLinkContainer.style.display = "none";
});

window.addEventListener("resize", function () {
  console.log(window.innerWidth);
  if (window.innerWidth > 540) {
    menuButton.style.display = "none";
    navLinkContainer.style.display = "flex";
    closeIcon.style.display = "none";
  } else {
    menuButton.style.display = "block";
    navLinkContainer.style.display = "none";
  }
});
