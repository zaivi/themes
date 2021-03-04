// Author : Giai Vi
// Version : 1.0
// Project : Creative Themes POFO

/*----------------------------Menu Table -----------------------*/
$(document).ready(() => {
    owlSlider.init();
    scrollDown.init();
    portfolioGrid.init();
    scrollToTop.init();
    headerFixed.init();
});

const owlSlider = {
    init() {
        this.owlSlider();
    },
    owlSlider() {
        $(".slider.owl-carousel").owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            },
            navText: [
                '<i class="fas fa-angle-left"></i>',
                '<i class="fas fa-angle-right"></i>',
            ],
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
        });
    },
};

const scrollDown = {
    init() {
        this.scrollDown();
    },
    scrollDown() {
        $(".navbar-slider__scrdown a").smoothScroll({
            speed: 500,
            offset: 1,
        });
    },
};

const portfolioGrid = {
    init() {
        this.portfolioGrid();
    },
    portfolioGrid() {
        $(".portfolio__grid").imagesLoaded(() => {
            $(".portfolio__grid").isotope({
                itemSelector: ".portfolio__grid-item",
                percentPosition: true,
                layoutMode: "masonry",
                masonry: {
                    // use element for option
                    horizontalOrder: true,
                    columnWidth: ".portfolio__grid-sizer",
                },
            });
        });
    },
};

const scrollToTop = {
    init() {
        this.scrollToTop();
    },
    scrollToTop() {
        let btn = $("#scroll-top");
        btn.click((e) => {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "fast");
        });
        $(window).scroll(() => {
            let pos = $(window).scrollTop();
            if (pos > 80) {
                btn.fadeIn("slow");
            } else {
                btn.fadeOut();
            }
        });
    },
};

const headerFixed = {
    init() {
        this.headerFixed();
    },
    headerFixed() {
        let header = $(".header__navbar");
        $(window).scroll(() => {
            let pos = $(window).scrollTop();
            console.log(pos);
            if (pos > 80) {
                header.css({
                    position: "fixed",
                    "max-height": "75px",
                    "background-color": "#000",
                    transition: "background-color 0.5s ease",
                });
            } else if (pos < 20) {
                header.css({
                    position: "absolute",
                    "max-height": "79px",
                    "background-color": "transparent",
                    transition: "",
                });
            }
        });
    },
};
