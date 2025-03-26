const menu5 = document.querySelector(".menu5");
const menu4 = document.querySelector(".menu4");
const menu3 = document.querySelector(".menu3");
const menu2 = document.querySelector(".menu2");
const menu1 = document.querySelector(".menu1");
const dropDown5 = document.querySelector(".dropDown5");
const dropDown4 = document.querySelector(".dropDown4");
const dropDown3 = document.querySelector(".dropDown3");
const dropDown2 = document.querySelector(".dropDown2");
const dropDown1 = document.querySelector(".dropDown1");
let sliderImage = document.querySelector(".sliderImage");

const LoginPageImageArr = [
  "LoginPagePic1",
  "LoginPagePic2",
  "LoginPagePic3",
  "LoginPagePic4",
  "LoginPagePic5",
];

const menuArray = [menu1, menu2, menu3, menu4, menu5];
const dropdownArray = [dropDown1, dropDown2, dropDown3, dropDown4, dropDown5];

// Add Click Event to Menu
menuArray.forEach(function (menu) {
  menu.addEventListener("click", function () {
    dropdownArray.forEach(function (dropDown) {
      if (
        !dropDown.classList.contains("hidden") &&
        dropDown !== dropdownArray[menuArray.indexOf(menu)]
      ) {
        dropDown.classList.add("hidden");
      }
    });
    dropdownArray[menuArray.indexOf(menu)].classList.toggle("hidden");
  });
});

// Change Image
const changeImage = function () {
  let i = 1;
  let nextImage = document.createElement("img");
  nextImage.classList.add("sliderImage");
  nextImage.style.transform = "translateX(100%)"; // Start off-screen to the right
  document.querySelector(".pictureSide").appendChild(nextImage);

  setInterval(function () {
    const currentImage = sliderImage;
    nextImage.src = `assets/${LoginPageImageArr[i]}.jpg`;

    // Slide current image out to the left
    currentImage.style.transform = "translateX(-100%)";

    // Slide next image in from the right
    nextImage.style.transform = "translateX(0)";

    setTimeout(() => {
      // Remove the old image and set the new one as the current image
      currentImage.remove();
      sliderImage = nextImage;
      nextImage = document.createElement("img");
      nextImage.classList.add("sliderImage");
      nextImage.style.transform = "translateX(100%)"; // Reset position for the next image
      document.querySelector(".pictureSide").appendChild(nextImage);
    }, 500); // Match the transition duration

    i++;
    if (i === LoginPageImageArr.length) i = 0;
  }, 5000);
};

changeImage();
