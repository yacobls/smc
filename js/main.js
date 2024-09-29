(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Team carousel
  $(".team-carousel, .related-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 30,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Vendor carousel
  $(".vendor-carousel").owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const zoomContainers = document.querySelectorAll(".zoom-container");

  zoomContainers.forEach((container) => {
    const img = container.querySelector(".zoom");
    const lens = document.createElement("div");
    lens.setAttribute("class", "lens");
    container.appendChild(lens);

    lens.style.backgroundImage = `url(${img.src})`;
    lens.style.backgroundSize = `${img.width * 2}px ${img.height * 2}px`;

    container.addEventListener("mousemove", moveLens);
    lens.addEventListener("mousemove", moveLens);
    container.addEventListener("touchmove", moveLens);

    function moveLens(e) {
      let pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      /* Calculate the position of the lens: */
      x = pos.x - lens.offsetWidth / 2;
      y = pos.y - lens.offsetHeight / 2;
      /* Prevent the lens from being positioned outside the image: */
      if (x > img.width - lens.offsetWidth) {
        x = img.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > img.height - lens.offsetHeight) {
        y = img.height - lens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }
      /* Set the position of the lens: */
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /* Display what the lens "sees": */
      lens.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
    }

    function getCursorPos(e) {
      let a,
        x = 0,
        y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const zoomContainers = document.querySelectorAll(".zoom-container-2");

  zoomContainers.forEach((container) => {
    const img = container.querySelector(".zoom-2");
    const lens = document.createElement("div");
    lens.setAttribute("class", "lens-2");
    container.appendChild(lens);

    lens.style.backgroundImage = `url(${img.src})`;
    lens.style.backgroundSize = `${img.width * 2}px ${img.height * 2}px`;

    container.addEventListener("mousemove", moveLens);
    lens.addEventListener("mousemove", moveLens);
    container.addEventListener("touchmove", moveLens);

    function moveLens(e) {
      let pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      /* Calculate the position of the lens: */
      x = pos.x - lens.offsetWidth / 2;
      y = pos.y - lens.offsetHeight / 2;
      /* Prevent the lens from being positioned outside the image: */
      if (x > img.width - lens.offsetWidth) {
        x = img.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > img.height - lens.offsetHeight) {
        y = img.height - lens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }
      /* Set the position of the lens: */
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /* Display what the lens "sees": */
      lens.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
    }

    function getCursorPos(e) {
      let a,
        x = 0,
        y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  });
});

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    // F12 key
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

// SLIDER 1

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const images = document.querySelectorAll(".slider img");
  const dotsContainer = document.querySelector(".slider-dots");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  const totalImages = images.length;

  function createDots() {
    for (let i = 0; i < totalImages; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        goToSlide(i);
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    const slideWidth = slider.clientWidth;
    slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    updateDots();
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : totalImages - 1;
    goToSlide(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < totalImages - 1 ? currentIndex + 1 : 0;
    goToSlide(currentIndex);
  });

  window.addEventListener("resize", () => {
    goToSlide(currentIndex);
  });

  createDots();
});

// SLIDER 2

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-2");
  const images = slider.querySelectorAll("img");
  const dotsContainer = document.querySelector(".slider-dots-2");
  const prevBtn = document.querySelector(".slider-container-2 .prev-btn");
  const nextBtn = document.querySelector(".slider-container-2 .next-btn");
  let currentIndex = 0;

  // Create dots based on the number of images
  images.forEach((image, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  // Function to update the slider position and dots
  function updateSlider(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dotsContainer.querySelectorAll(".dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  }

  // Event listeners for navigation buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateSlider(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateSlider(currentIndex);
  });

  // Event listeners for dots
  dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });
});

// SLIDER-3

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-3");
  const images = slider.querySelectorAll("img");
  const dotsContainer = document.querySelector(".slider-dots-3");
  const prevBtn = document.querySelector(".slider-container-3 .prev-btn");
  const nextBtn = document.querySelector(".slider-container-3 .next-btn");
  let currentIndex = 0;

  // Create dots based on the number of images
  images.forEach((image, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  // Function to update the slider position and dots
  function updateSlider(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dotsContainer.querySelectorAll(".dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  }

  // Event listeners for navigation buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateSlider(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateSlider(currentIndex);
  });

  // Event listeners for dots
  dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });
});

// SLIDER-4

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-4");
  const images = slider.querySelectorAll("img");
  const dotsContainer = document.querySelector(".slider-dots-4");
  const prevBtn = document.querySelector(".slider-container-4 .prev-btn");
  const nextBtn = document.querySelector(".slider-container-4 .next-btn");
  let currentIndex = 0;

  // Create dots based on the number of images
  images.forEach((image, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  // Function to update the slider position and dots
  function updateSlider(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dotsContainer.querySelectorAll(".dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  }

  // Event listeners for navigation buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateSlider(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateSlider(currentIndex);
  });

  // Event listeners for dots
  dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });
});

// SLIDER-5

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-5");
  const images = slider.querySelectorAll("img");
  const dotsContainer = document.querySelector(".slider-dots-5");
  const prevBtn = document.querySelector(".slider-container-5 .prev-btn");
  const nextBtn = document.querySelector(".slider-container-5 .next-btn");
  let currentIndex = 0;

  // Create dots based on the number of images
  images.forEach((image, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  // Function to update the slider position and dots
  function updateSlider(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dotsContainer.querySelectorAll(".dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  }

  // Event listeners for navigation buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateSlider(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateSlider(currentIndex);
  });

  // Event listeners for dots
  dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });
});

// SLIDER-6

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-6");
  const images = slider.querySelectorAll("img");
  const dotsContainer = document.querySelector(".slider-dots-6");
  const prevBtn = document.querySelector(".slider-container-6 .prev-btn");
  const nextBtn = document.querySelector(".slider-container-6 .next-btn");
  let currentIndex = 0;

  // Create dots based on the number of images
  images.forEach((image, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  // Function to update the slider position and dots
  function updateSlider(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dotsContainer.querySelectorAll(".dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  }

  // Event listeners for navigation buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateSlider(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateSlider(currentIndex);
  });

  // Event listeners for dots
  dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });
});

// SLIDER-7

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-7");
  const images = slider.querySelectorAll("img");
  const dotsContainer = document.querySelector(".slider-dots-7");
  const prevBtn = document.querySelector(".slider-container-7 .prev-btn");
  const nextBtn = document.querySelector(".slider-container-7 .next-btn");
  let currentIndex = 0;

  // Create dots based on the number of images
  images.forEach((image, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  // Function to update the slider position and dots
  function updateSlider(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dotsContainer.querySelectorAll(".dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  }

  // Event listeners for navigation buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateSlider(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateSlider(currentIndex);
  });

  // Event listeners for dots
  dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });
});

// SLIDER-8

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-8");
  const images = slider.querySelectorAll("img");
  const dotsContainer = document.querySelector(".slider-dots-8");
  const prevBtn = document.querySelector(".slider-container-8 .prev-btn");
  const nextBtn = document.querySelector(".slider-container-8 .next-btn");
  let currentIndex = 0;

  // Create dots based on the number of images
  images.forEach((image, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  // Function to update the slider position and dots
  function updateSlider(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dotsContainer.querySelectorAll(".dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  }

  // Event listeners for navigation buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateSlider(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateSlider(currentIndex);
  });

  // Event listeners for dots
  dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });
});

// SLIDER-9

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-9");
  const images = slider.querySelectorAll("img");
  const dotsContainer = document.querySelector(".slider-dots-9");
  const prevBtn = document.querySelector(".slider-container-9 .prev-btn");
  const nextBtn = document.querySelector(".slider-container-9 .next-btn");
  let currentIndex = 0;

  // Create dots based on the number of images
  images.forEach((image, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  // Function to update the slider position and dots
  function updateSlider(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dotsContainer.querySelectorAll(".dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  }

  // Event listeners for navigation buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateSlider(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateSlider(currentIndex);
  });

  // Event listeners for dots
  dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });
});

// SLIDER-10

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-10");
  const images = slider.querySelectorAll("img");
  const dotsContainer = document.querySelector(".slider-dots-10");
  const prevBtn = document.querySelector(".slider-container-10 .prev-btn");
  const nextBtn = document.querySelector(".slider-container-10 .next-btn");
  let currentIndex = 0;

  // Create dots based on the number of images
  images.forEach((image, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  // Function to update the slider position and dots
  function updateSlider(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dotsContainer.querySelectorAll(".dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  }

  // Event listeners for navigation buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateSlider(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateSlider(currentIndex);
  });

  // Event listeners for dots
  dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });
});

// SLIDER-11

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-11");
  const images = slider.querySelectorAll("img");
  const dotsContainer = document.querySelector(".slider-dots-11");
  const prevBtn = document.querySelector(".slider-container-11 .prev-btn");
  const nextBtn = document.querySelector(".slider-container-11 .next-btn");
  let currentIndex = 0;

  // Create dots based on the number of images
  images.forEach((image, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  // Function to update the slider position and dots
  function updateSlider(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dotsContainer.querySelectorAll(".dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  }

  // Event listeners for navigation buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateSlider(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateSlider(currentIndex);
  });

  // Event listeners for dots
  dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });
});

// SLIDER-12

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-12");
  const images = slider.querySelectorAll("img");
  const dotsContainer = document.querySelector(".slider-dots-12");
  const prevBtn = document.querySelector(".slider-container-12 .prev-btn");
  const nextBtn = document.querySelector(".slider-container-12 .next-btn");
  let currentIndex = 0;

  // Create dots based on the number of images
  images.forEach((image, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  // Function to update the slider position and dots
  function updateSlider(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dotsContainer.querySelectorAll(".dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  }

  // Event listeners for navigation buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateSlider(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateSlider(currentIndex);
  });

  // Event listeners for dots
  dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });
});

// SLIDER-13

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-13");
  const images = slider.querySelectorAll("img");
  const dotsContainer = document.querySelector(".slider-dots-13");
  const prevBtn = document.querySelector(".slider-container-13 .prev-btn");
  const nextBtn = document.querySelector(".slider-container-13 .next-btn");
  let currentIndex = 0;

  // Create dots based on the number of images
  images.forEach((image, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  // Function to update the slider position and dots
  function updateSlider(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dotsContainer.querySelectorAll(".dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  }

  // Event listeners for navigation buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateSlider(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateSlider(currentIndex);
  });

  // Event listeners for dots
  dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });
});

// SLIDER-17

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-17");
  const images = slider.querySelectorAll("img");
  const dotsContainer = document.querySelector(".slider-dots-17");
  const prevBtn = document.querySelector(".slider-container-17 .prev-btn");
  const nextBtn = document.querySelector(".slider-container-17 .next-btn");
  let currentIndex = 0;

  // Create dots based on the number of images
  images.forEach((image, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  // Function to update the slider position and dots
  function updateSlider(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dotsContainer.querySelectorAll(".dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  }

  // Event listeners for navigation buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateSlider(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateSlider(currentIndex);
  });

  // Event listeners for dots
  dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });
});

// MODAL GALERI

// Dapatkan elemen modal
var modal = document.getElementById("myModal");

// Dapatkan elemen gambar dalam modal
var modalImg = document.getElementById("modal-img");

// Dapatkan elemen close
var span = document.getElementsByClassName("close")[0];

// Tambahkan event listener ke setiap gambar
var images = document.querySelectorAll(".image-container-1 img");
images.forEach(function (image) {
  image.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Ketika pengguna mengklik tombol close, tutup modal
span.onclick = function () {
  modal.style.display = "none";
};

// Ketika pengguna mengklik di luar modal, tutup modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Ketika pengguna mengklik tombol close, tutup modal
span.onclick = function () {
  modal.style.display = "none";
};

// Ketika pengguna mengklik di luar modal, tutup modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// SLIDER-14

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal-1");
  const modalImg = document.getElementById("modal-img-1");
  const sliderImages = document.querySelector(".slider-images-14");
  const images = sliderImages.querySelectorAll("img");
  const closeButton = modal.querySelector(".close");

  images.forEach((img) => {
    img.addEventListener("click", function () {
      modalImg.src = this.src;
      modal.style.display = "block";
    });
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// JavaScript untuk interaksi tombol (jika diperlukan)
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("whatsapp-button");
  button.addEventListener("click", function () {
    // Tambahkan logika khusus jika diperlukan
    console.log("Tombol WhatsApp diklik");
  });
});
