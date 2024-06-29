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