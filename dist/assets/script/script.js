//Header Off-Canvas-Menu
const menuToggleButton = document.getElementById("menuToggleButton");
const closeMenuButton = document.getElementById("closeMenuButton");
const offCanvasMenu = document.getElementById("offCanvasMenu");
const bodyOverlay = document.getElementById("body-overlay");
const menuItems = document.querySelectorAll("#offCanvasMenu ul li");

function hideMenu() {
  offCanvasMenu.classList.remove("show");
  bodyOverlay.classList.remove("active");
}

menuToggleButton.addEventListener("click", function () {
  offCanvasMenu.classList.add("show");
  bodyOverlay.classList.add("active");
});

closeMenuButton.addEventListener("click", hideMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", hideMenu);
});

// Hero Section Carousel swiper
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

// feature secction Swiper start
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
  if (swiper.params.slidesPerView === 3) {
    swiper.slides.forEach((slide) => {
      slide.style.backgroundColor = "";
    });

    let middleIndex = (swiper.activeIndex + 1) % swiper.slides.length;

    swiper.slides[middleIndex].style.backgroundColor = "#f8f0f0";
  }
}

// Back to top
const scrollTop = document.getElementById("scroll__top");

if (scrollTop) {
  scrollTop.addEventListener("click", function () {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  });
  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      scrollTop.classList.add("active");
    } else {
      scrollTop.classList.remove("active");
    }
  });
}
