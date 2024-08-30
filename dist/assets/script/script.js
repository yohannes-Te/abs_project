//Header Off-Canvas-Menu Start
const menuToggleButton = document.getElementById("menuToggleButton");
const closeMenuButton = document.getElementById("closeMenuButton");
const offCanvasMenu = document.getElementById("offCanvasMenu");
const bodyOverlay = document.getElementById("body-overlay");
const menuItems = document.querySelectorAll("#offCanvasMenu ul li");

// Function to hide the menu
function hideMenu() {
  offCanvasMenu.classList.remove("show");
  bodyOverlay.classList.remove("active");
}

// Show the menu when menuToggleButton is clicked
menuToggleButton.addEventListener("click", function () {
  offCanvasMenu.classList.add("show");
  bodyOverlay.classList.add("active");
});

// Hide the menu when closeMenuButton is clicked
closeMenuButton.addEventListener("click", hideMenu);

// Hide the menu when clicking outside of it
bodyOverlay.addEventListener("click", function (event) {
  if (event.target === bodyOverlay) {
    hideMenu();
  }
});

// Hide the menu when clicking on any menu item
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", hideMenu);
});
// Header Off-Canvas-Menu-end

// Hero Section Carousel swiper start
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0.5,
  // centeredSlides: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// hero section Carousel Swiper End
