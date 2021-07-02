(function ($) {
    "use strict";
    jQuery(".mean-menu").meanmenu({ meanScreenWidth: "991" });
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 120) {
            $(".navbar-area").addClass("is-sticky");
        } else {
            $(".navbar-area").removeClass("is-sticky");
        }
    });
    $(".search-box i").on("click", function () {
        $(".search-overlay").toggleClass("search-overlay-active");
    });
    $(".search-overlay-close").on("click", function () {
        $(".search-overlay").removeClass("search-overlay-active");
    });
    $(".hero-slider").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        autoHeight: true,
        autoplay: true,
        autoplayHoverPause: true,
        dots: false,
        navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
    });
    $(".hero-slider-two").owlCarousel({ items: 1, loop: true, margin: 0, nav: true, autoplay: true, autoplayHoverPause: true, dots: false, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"] });
    $(".speciality-slider").owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='bx bxs-left-arrow-alt'></i>", "<i class='bx bxs-right-arrow-alt'></i>"],
        responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 2 }, 1200: { items: 3 } },
    });
    $(".testimonials-slider").owlCarousel({ items: 1, loop: true, margin: 30, dots: true, nav: true, autoplay: true, autoplayHoverPause: true, navText: ["<i class='bx bxs-left-arrow-alt'></i>", "<i class='bx bxs-right-arrow-alt'></i>"] });
    $(".partner-slider").owlCarousel({ loop: true, dots: false, margin: 30, nav: false, autoplay: true, autoplayHoverPause: true, responsive: { 0: { items: 2 }, 576: { items: 3 }, 768: { items: 4 }, 1200: { items: 5 } } });
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({ disableOn: 300, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: false, fixedContentPos: false });
    $(".services-slider").owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='bx bxs-left-arrow-alt'></i>", "<i class='bx bxs-right-arrow-alt'></i>"],
        responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 2 }, 1200: { items: 4 } },
    });
    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    $(".hero-slider-three").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        autoHeight: true,
        autoplay: true,
        autoplayHoverPause: true,
        dots: true,
        navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
    });
    $(".services-slider-two").owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='bx bxs-left-arrow-alt'></i>", "<i class='bx bxs-right-arrow-alt'></i>"],
        responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } },
    });
    $(".clients-slider").owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='bx bxs-left-arrow-alt'></i>", "<i class='bx bxs-right-arrow-alt'></i>"],
        responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 1 }, 1200: { items: 2 } },
    });
    $("#accordion h3").on("click", function () {
        var iconChevron = $(".bx-chevron-right"),
            currentIcon = $(this).children(".bx-chevron-right");
        $(iconChevron).not(currentIcon).removeClass("is-rotate");
        $(this).children(".bx-chevron-right").toggleClass("is-rotate");
        $(this).next().toggleClass("is-hidden").siblings(".drawer").addClass("is-hidden");
    });
    $(".blog-slider").owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='bx bxs-left-arrow-alt'></i>", "<i class='bx bxs-right-arrow-alt'></i>"],
        responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } },
    });
    $(".ferry-gallery").magnificPopup({ delegate: "a", type: "image", tLoading: "Loading image #%curr%...", mainClass: "mfp-img-mobile", gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] } });
    $(".accordion > li:eq(0) .title").addClass("active").next().slideDown();
    $(".accordion .title").click(function (j) {
        var dropDown = $(this).closest("li").find(".accordion-content");
        $(this).closest(".accordion").find(".accordion-content").not(dropDown).slideUp();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).closest(".accordion").find(".title.active").removeClass("active");
            $(this).addClass("active");
        }
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });
    function makeTimer() {
        var endTime = new Date("november  30, 2022 17:00:00 PDT");
        var endTime = Date.parse(endTime) / 1000;
        var now = new Date();
        var now = Date.parse(now) / 1000;
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - days * 86400) / 3600);
        var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
        var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function () {
        makeTimer();
    }, 300);
    $(".feedback-slider").owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='bx bxs-left-arrow-alt'></i>", "<i class='bx bxs-right-arrow-alt'></i>"],
        responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 1 }, 1200: { items: 1 } },
    });
    $(".newsletter-form")
        .validator()
        .on("submit", function (event) {
            if (event.isDefaultPrevented()) {
                formErrorSub();
                submitMSGSub(false, "Please enter your email correctly.");
            } else {
                event.preventDefault();
            }
        });
    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }
    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function () {
            $("#validator-newsletter").addClass("hide");
        }, 4000);
    }
    function formErrorSub() {
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function () {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000);
    }
    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    $(".newsletter-form").ajaxChimp({ url: "https://EnvyTheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", callback: callbackFunction });
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 0) {
            $(".go-top").addClass("active");
        } else {
            $(".go-top").removeClass("active");
        }
    });
    $(function () {
        $(window).on("scroll", function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $(".go-top").addClass("active");
            if (scrolled < 600) $(".go-top").removeClass("active");
        });
        $(".go-top").on("click", function () {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });
    jQuery(window).on("load", function () {
        jQuery(".preloader").fadeOut(500);
    });
})(jQuery);
