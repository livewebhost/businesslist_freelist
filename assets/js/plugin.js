// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        "assert",
        "clear",
        "count",
        "debug",
        "dir",
        "dirxml",
        "error",
        "exception",
        "group",
        "groupCollapsed",
        "groupEnd",
        "info",
        "log",
        "markTimeline",
        "profile",
        "profileEnd",
        "table",
        "time",
        "timeEnd",
        "timeline",
        "timelineEnd",
        "timeStamp",
        "trace",
        "warn",
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
})();

// Place any jQuery/helper plugins in here.
$(document).ready(function () {
    // nice select
    $("select").niceSelect();

    // counter up js
    $(".counter-number").counterUp({
        delay: 10,
        time: 1000,
    });

    // counter up js
    $(".counter-number-lg").counterUp({
        delay: 10,
        time: 2000,
    });

    // magnific popup js
    $(".popup-link").magnificPopup({
        type: "image",
        // other options
    });

    // testimonial slider stle 1
    $(".testimonials-s1-wrap").slick({
        dots: true,
        infinite: true,
        autoplay: false,
        prevArrow: "",
        nextArrow: "",
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    // testimonial slider style 2
    $(".testimonials-s2-wrap").slick({
        asNavFor: ".testimonials-s2-nav",
        dots: false,
        infinite: true,
        autoplay: false,
        prevArrow: "",
        nextArrow: "",
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".testimonials-s2-nav").slick({
        asNavFor: ".testimonials-s2-wrap",
        centerMode: true,
        centerPadding: "50px",
        dots: false,
        infinite: true,
        autoplay: false,
        prevArrow: "",
        nextArrow: "",
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    // product detail slider
    $(".product-thumb-slider-inner").slick({
        dots: false,
        infinite: true,
        autoplay: false,
        prevArrow: '<button class="btn-prev"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="btn-next"><i class="fa-solid fa-angle-right"></i></button>',
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    // team slider 
    $(".team-slider-s1").slick({
        dots: true,
        infinite: true,
        autoplay: false,
        prevArrow: '',
        nextArrow: '',
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});