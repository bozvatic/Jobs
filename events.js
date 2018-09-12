// Navbar for mobile screens

$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
});


// Slider Slick

$(function () {
    $('.slide').slick({
        slidesToShow: 4,
        infinite: true,
        pauseOnHover: true,
        dots: true,
        arrows: true,
        accessibility: true,
        autoplay: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});


//  Animated dropdown menu


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


// Left social media scrolling 

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 600) {
        $('.social-left').fadeIn(1500);
    } else {
        $('.social-left').fadeOut(1500);
    }
});

// Button to top


// Display the button

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#backTop').fadeIn(1000);
    } else {
        $('#backTop').fadeOut(1000);
    }
});
$(document).ready(function () {
    $("#backTop").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

});
/*Scroll to top when arrow up clicked END*/