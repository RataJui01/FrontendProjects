window.addEventListener("scroll", function () {
  const categoryContainer = document.querySelector(".categoryContainer");
  if (window.scrollY >= 100) {
    categoryContainer.classList.add("sticky");
  } else {
    categoryContainer.classList.remove("sticky");
  }
});
