const categoryContainer = document.querySelector(".categoryContainer");
const categoryArray = Array.from(categoryContainer.children);

categoryArray.forEach(function (child, index) {
  child.addEventListener("click", function () {
    console.log(child);
    for (const element of categoryArray.entries()) {
      if (index === element[0]) {
        continue;
      } else {
        if (element[1].classList.contains("clickCategoryContainer")) {
          element[1].classList.remove("clickCategoryContainer");
        } else {
          continue;
        }
      }
    }
    child.classList.add("clickCategoryContainer");
  });
});
