$(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $('.no-padding').addClass('fadeInLeft');
        }

        else {
            $('.no-padding').removeClass('fadeInLeft');
        }
    });
})

$(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 700) {
            $('.portfolio').addClass('fadeInUpBig');
        }

        else {
            $('.portfolio').removeClass('fadeInUpBig');
        }
    });
})

$(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1400) {
            $('.testimonial').addClass('fadeInRightBig');
        }

        else {
            $('.testimonial').removeClass('fadeInRightBig');
        }
    });
})

$(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1900) {
            $('.about-team').addClass('fadeInUpBig');
        }

        else {
            $('.about-team').removeClass('fadeInUpBig');
        }
    });
})

$(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 2000) {
            $('.team').addClass('slideInRight');
        }

        else {
            $('.team').removeClass('slideInRight');
        }
    });
})

$(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 2300) {
            $('.about-team-2').addClass('fadeInUpBig');
        }

        else {
            $('.about-team-2').removeClass('fadeInUpBig');
        }
    });
})

$(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 3000) {
            $('#contact').addClass('zoomIn');
        }

        else {
            $('#contact').removeClass('zoomIn');
        }
    });
})


