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
// bodyOverlay.addEventListener("click", function (event) {
//   if (event.target === bodyOverlay) {
//     hideMenu();
//   }
// });

// Hide the menu when clicking on any menu item
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", hideMenu);
});
// Header Off-Canvas-Menu-end

// Hero Section Carousel swiper start
var swiper1 = new Swiper(".mySwiper1", {
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

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },

  on: {
    slideChange: function () {
      setMiddleSlideBackground(this);
    },
  },
});
function setMiddleSlideBackground(swiper) {
  // Ensure operation only when slidesPerView is 3
  if (swiper.params.slidesPerView === 3) {
    // Remove background color from all slides
    swiper.slides.forEach((slide) => {
      slide.style.backgroundColor = ""; // Reset background color
    });

    // Calculate the index for the middle slide
    let middleIndex = (swiper.activeIndex + 1) % swiper.slides.length;

    // Set the background color of the middle slide
    swiper.slides[middleIndex].style.backgroundColor = "#f8f0f0"; // Customize color
  }
}
