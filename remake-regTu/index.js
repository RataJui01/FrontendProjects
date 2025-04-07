const menu5 = document.querySelector(".menu5");
const menu4 = document.querySelector(".menu4");
const menu3 = document.querySelector(".menu3");
const menu2 = document.querySelector(".menu2");
const menu1 = document.querySelector(".menu1");
const dropdownLink1 = document.querySelector(".dropdownLink1");
const dropdownLink2 = document.querySelector(".dropdownLink2");
const dropdownLink3 = document.querySelector(".dropdownLink3");
const dropdownLink4 = document.querySelector(".dropdownLink4");
const dropdownLink5 = document.querySelector(".dropdownLink5");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const closeBtn = document.querySelector(".closeBtn");
const navMenu = document.querySelector(".navMenu");
let sliderImage = document.querySelector(".sliderImage");

const LoginPageImageArr = [
  "LoginPagePic1",
  "LoginPagePic2",
  "LoginPagePic3",
  "LoginPagePic4",
  "LoginPagePic5",
];

const menuArray = [menu1, menu2, menu3, menu4, menu5];
const dropdownArray = [
  dropdownLink1,
  dropdownLink2,
  dropdownLink3,
  dropdownLink4,
  dropdownLink5,
];

menuArray.forEach((menu, index) => {
  menu.addEventListener("click", function () {
    dropdownArray[index].style.display =
      dropdownArray[index].style.display === "block" ? "none" : "block";

    dropdownArray.forEach((dropdown, dropdownIndex) => {
      if (dropdownIndex !== index && dropdown.style.display === "block") {
        dropdown.style.display = "none";
      }
    });
  });
});

//Show Side-bar function
const showSidebar = function () {
  navMenu.classList.remove("hideSideBar");
  navMenu.classList.add("showSideBar");
};

//Hide Side-bar function
const hideSidebar = function () {
  navMenu.classList.remove("showSideBar");
  navMenu.classList.add("hideSideBar");
};

// Change Image function
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

window.addEventListener("resize", function () {
  let windowWidth = this.window.innerWidth;
  if (windowWidth > 900) hideSidebar();
});

hamburgerMenu.addEventListener("click", function () {
  showSidebar();
});

closeBtn.addEventListener("click", function () {
  hideSidebar();
});
