(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
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
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
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
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    
})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    const zoomContainers = document.querySelectorAll(".zoom-container");

    zoomContainers.forEach(container => {
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
            x = pos.x - (lens.offsetWidth / 2);
            y = pos.y - (lens.offsetHeight / 2);
            /* Prevent the lens from being positioned outside the image: */
            if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
            if (x < 0) {x = 0;}
            if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
            if (y < 0) {y = 0;}
            /* Set the position of the lens: */
            lens.style.left = x + "px";
            lens.style.top = y + "px";
            /* Display what the lens "sees": */
            lens.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
        }

        function getCursorPos(e) {
            let a, x = 0, y = 0;
            e = e || window.event;
            /* Get the x and y positions of the image: */
            a = img.getBoundingClientRect();
            /* Calculate the cursor's x and y coordinates, relative to the image: */
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            /* Consider any page scrolling: */
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return {x: x, y: y};
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const zoomContainers = document.querySelectorAll(".zoom-container-2");

    zoomContainers.forEach(container => {
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
            x = pos.x - (lens.offsetWidth / 2);
            y = pos.y - (lens.offsetHeight / 2);
            /* Prevent the lens from being positioned outside the image: */
            if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
            if (x < 0) {x = 0;}
            if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
            if (y < 0) {y = 0;}
            /* Set the position of the lens: */
            lens.style.left = x + "px";
            lens.style.top = y + "px";
            /* Display what the lens "sees": */
            lens.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
        }

        function getCursorPos(e) {
            let a, x = 0, y = 0;
            e = e || window.event;
            /* Get the x and y positions of the image: */
            a = img.getBoundingClientRect();
            /* Calculate the cursor's x and y coordinates, relative to the image: */
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            /* Consider any page scrolling: */
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return {x: x, y: y};
        }
    });
});

document.addEventListener('contextmenu', function(event) {
	event.preventDefault();
  });

  document.onkeydown = function(e) {
	if(e.keyCode == 123) { // F12 key
	  return false;
	}
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
	  return false;
	}
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
	  return false;
	}
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
	  return false;
	}
	if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
	  return false;
	}
  }

// SLIDER 1

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotContainer = document.querySelector('.slider-dots');

let currentIndex = 0;
const slideWidth = slides[0].clientWidth; // Lebar satu slide

// Membuat dots untuk setiap slide
slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) {
        dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
        updateDots();
    });
    dotContainer.appendChild(dot);
});

// Fungsi untuk menampilkan slide berikutnya
function showNextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateSlider();
    updateDots();
}

// Fungsi untuk menampilkan slide sebelumnya
function showPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateSlider();
    updateDots();
}

// Fungsi untuk memperbarui tampilan slider
function updateSlider() {
    const offset = -1 * currentIndex * slideWidth;
    slider.style.transform = `translateX(${offset}px)`;
}

// Fungsi untuk memperbarui dots
function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Event listener untuk tombol prev dan next
prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);

// SLIDER 2

const slider2 = document.querySelector('.slider-2');
const slides2 = document.querySelectorAll('.slider-2 img');
const prevBtn2 = document.querySelector('.slider-container-2 .prev-btn');
const nextBtn2 = document.querySelector('.slider-container-2 .next-btn');
const dotContainer2 = document.querySelector('.slider-dots-2');

let currentIndex2 = 0;
const slideWidth2 = slides2[0].clientWidth; // Lebar satu slide

// Membuat dots untuk setiap slide
slides2.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot-2');
    if (index === 0) {
        dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
        currentIndex2 = index;
        updateSlider2();
        updateDots2();
    });
    dotContainer2.appendChild(dot);
});

// Fungsi untuk menampilkan slide berikutnya
function showNextSlide2() {
    currentIndex2++;
    if (currentIndex2 >= slides2.length) {
        currentIndex2 = 0;
    }
    updateSlider2();
    updateDots2();
}

// Fungsi untuk menampilkan slide sebelumnya
function showPrevSlide2() {
    currentIndex2--;
    if (currentIndex2 < 0) {
        currentIndex2 = slides2.length - 1;
    }
    updateSlider2();
    updateDots2();
}

// Fungsi untuk memperbarui tampilan slider
function updateSlider2() {
    const offset2 = -1 * currentIndex2 * slideWidth2;
    slider2.style.transform = `translateX(${offset2}px)`;
}

// Fungsi untuk memperbarui dots
function updateDots2() {
    document.querySelectorAll('.dot-2').forEach((dot, index) => {
        if (index === currentIndex2) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Event listener untuk tombol prev dan next
prevBtn2.addEventListener('click', showPrevSlide2);
nextBtn2.addEventListener('click', showNextSlide2);

// SLIDER-3

const slider3 = document.querySelector('.slider-3');
const slides3 = document.querySelectorAll('.slider-3 img');
const prevBtn3 = document.querySelector('.slider-container-3 .prev-btn');
const nextBtn3 = document.querySelector('.slider-container-3 .next-btn');
const dotContainer3 = document.querySelector('.slider-dots-3');

let currentIndex3 = 0;
const slideWidth3 = slides3[0].clientWidth; // Lebar satu slide

// Membuat dots untuk setiap slide
slides3.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot-3');
    if (index === 0) {
        dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
        currentIndex3 = index;
        updateSlider3();
        updateDots3();
    });
    dotContainer3.appendChild(dot);
});

// Fungsi untuk menampilkan slide berikutnya
function showNextSlide3() {
    currentIndex3++;
    if (currentIndex3 >= slides3.length) {
        currentIndex3 = 0;
    }
    updateSlider3();
    updateDots3();
}

// Fungsi untuk menampilkan slide sebelumnya
function showPrevSlide3() {
    currentIndex3--;
    if (currentIndex3 < 0) {
        currentIndex3 = slides3.length - 1;
    }
    updateSlider3();
    updateDots3();
}

// Fungsi untuk memperbarui tampilan slider
function updateSlider3() {
    const offset3 = -1 * currentIndex3 * slideWidth3;
    slider3.style.transform = `translateX(${offset3}px)`;
}

// Fungsi untuk memperbarui dots
function updateDots3() {
    document.querySelectorAll('.dot-3').forEach((dot, index) => {
        if (index === currentIndex3) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Event listener untuk tombol prev dan next
prevBtn3.addEventListener('click', showPrevSlide3);
nextBtn3.addEventListener('click', showNextSlide3);

// SLIDER-4

const slider4 = document.querySelector('.slider-4');
const slides4 = document.querySelectorAll('.slider-4 img');
const prevBtn4 = document.querySelector('.slider-container-4 .prev-btn');
const nextBtn4 = document.querySelector('.slider-container-4 .next-btn');
const dotContainer4 = document.querySelector('.slider-dots-4');

let currentIndex4 = 0;
const slideWidth4 = slides4[0].clientWidth; // Lebar satu slide

// Membuat dots untuk setiap slide
slides4.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot-4');
    if (index === 0) {
        dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
        currentIndex4 = index;
        updateSlider4();
        updateDots4();
    });
    dotContainer4.appendChild(dot);
});

// Fungsi untuk menampilkan slide berikutnya
function showNextSlide4() {
    currentIndex4++;
    if (currentIndex4 >= slides4.length) {
        currentIndex4 = 0;
    }
    updateSlider4();
    updateDots4();
}

// Fungsi untuk menampilkan slide sebelumnya
function showPrevSlide4() {
    currentIndex4--;
    if (currentIndex4 < 0) {
        currentIndex4 = slides4.length - 1;
    }
    updateSlider4();
    updateDots4();
}

// Fungsi untuk memperbarui tampilan slider
function updateSlider4() {
    const offset4 = -1 * currentIndex4 * slideWidth4;
    slider4.style.transform = `translateX(${offset4}px)`;
}

// Fungsi untuk memperbarui dots
function updateDots4() {
    document.querySelectorAll('.dot-4').forEach((dot, index) => {
        if (index === currentIndex4) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Event listener untuk tombol prev dan next
prevBtn4.addEventListener('click', showPrevSlide4);
nextBtn4.addEventListener('click', showNextSlide4);

// SLIDER-5

const slider5 = document.querySelector('.slider-5');
const slides5 = document.querySelectorAll('.slider-5 img');
const prevBtn5 = document.querySelector('.slider-container-5 .prev-btn');
const nextBtn5 = document.querySelector('.slider-container-5 .next-btn');
const dotContainer5 = document.querySelector('.slider-dots-5');

let currentIndex5 = 0;
const slideWidth5 = slides5[0].clientWidth; // Lebar satu slide

// Membuat dots untuk setiap slide
slides5.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot-5');
    if (index === 0) {
        dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
        currentIndex5 = index;
        updateSlider5();
        updateDots5();
    });
    dotContainer5.appendChild(dot);
});

// Fungsi untuk menampilkan slide berikutnya
function showNextSlide5() {
    currentIndex5++;
    if (currentIndex5 >= slides5.length) {
        currentIndex5 = 0;
    }
    updateSlider5();
    updateDots5();
}

// Fungsi untuk menampilkan slide sebelumnya
function showPrevSlide5() {
    currentIndex5--;
    if (currentIndex5 < 0) {
        currentIndex5 = slides5.length - 1;
    }
    updateSlider5();
    updateDots5();
}

// Fungsi untuk memperbarui tampilan slider
function updateSlider5() {
    const offset5 = -1 * currentIndex5 * slideWidth5;
    slider5.style.transform = `translateX(${offset5}px)`;
}

// Fungsi untuk memperbarui dots
function updateDots5() {
    document.querySelectorAll('.dot-5').forEach((dot, index) => {
        if (index === currentIndex5) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Event listener untuk tombol prev dan next
prevBtn5.addEventListener('click', showPrevSlide5);
nextBtn5.addEventListener('click', showNextSlide5);

// SLIDER-6

const slider6 = document.querySelector('.slider-6');
const slides6 = document.querySelectorAll('.slider-6 img');
const prevBtn6 = document.querySelector('.slider-container-6 .prev-btn');
const nextBtn6 = document.querySelector('.slider-container-6 .next-btn');
const dotContainer6 = document.querySelector('.slider-dots-6');

let currentIndex6 = 0;
const slideWidth6 = slides6[0].clientWidth; // Lebar satu slide

// Membuat dots untuk setiap slide
slides6.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot-6');
    if (index === 0) {
        dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
        currentIndex6 = index;
        updateSlider6();
        updateDots6();
    });
    dotContainer6.appendChild(dot);
});

// Fungsi untuk menampilkan slide berikutnya
function showNextSlide6() {
    currentIndex6++;
    if (currentIndex6 >= slides6.length) {
        currentIndex6 = 0;
    }
    updateSlider6();
    updateDots6();
}

// Fungsi untuk menampilkan slide sebelumnya
function showPrevSlide6() {
    currentIndex6--;
    if (currentIndex6 < 0) {
        currentIndex6 = slides6.length - 1;
    }
    updateSlider6();
    updateDots6();
}

// Fungsi untuk memperbarui tampilan slider
function updateSlider6() {
    const offset6 = -1 * currentIndex6 * slideWidth6;
    slider6.style.transform = `translateX(${offset6}px)`;
}

// Fungsi untuk memperbarui dots
function updateDots6() {
    document.querySelectorAll('.dot-6').forEach((dot, index) => {
        if (index === currentIndex6) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Event listener untuk tombol prev dan next
prevBtn6.addEventListener('click', showPrevSlide6);
nextBtn6.addEventListener('click', showNextSlide6);