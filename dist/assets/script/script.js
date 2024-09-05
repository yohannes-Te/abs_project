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

// Function to calculate the top offset of an element
const getTopOffset = (element) => {
  let offsetTop = 0;
  while (element) {
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }

  return offsetTop;
};

// Header sticky activation
const headerStickyWrapper = document.querySelector("header");
const headerStickyTarget = document.querySelector(".header__sticky");

if (headerStickyTarget) {
  window.addEventListener("scroll", function () {
    const stickyTargetElementOffset = getTopOffset(headerStickyWrapper);

    if (window.scrollY > stickyTargetElementOffset) {
      headerStickyTarget.classList.add("sticky");
    } else {
      headerStickyTarget.classList.remove("sticky");
    }
  });
}

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

// Initialize Isotope
var elem = document.querySelector(".gallery");
var iso = new Isotope(elem, {
  itemSelector: ".item",
  layoutMode: "fitRows",
});

// Filter items on button click
var filterButtons = document.querySelectorAll(".filters-button-group .button");
filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var filterValue = button.getAttribute("data-filter");
    iso.arrange({ filter: filterValue });

    // Toggle active class
    filterButtons.forEach((btn) => btn.classList.remove("is-checked"));
    button.classList.add("is-checked");
  });
});

// glightbox initialization
const lightbox = GLightbox({
  selector: ".glightbox",
  touchNavigation: true,
  loop: true,
});

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
