/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
sliders = {};
$(document).ready(function () {
    $('.intro-text .name').addClass('animated bounceIn');
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
});
function initializeSlider(id) {
    var _SlideshowTransitions = [
        //Fade
        {$Duration: 1200, $Zoom: 11, $Rotate: -1, $Easing: {$Zoom: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad}, $Opacity: 2, $Round: {$Rotate: 0.5}, $Brother: {$Duration: 1200, $Zoom: 1, $Rotate: 1, $Easing: $JssorEasing$.$EaseSwing, $Opacity: 2, $Round: {$Rotate: 0.5}, $Shift: 90}}
    ];

    var options = {
        $SlideDuration: 500, //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
        $DragOrientation: 3, //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
        $AutoPlay: true, //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
        $AutoPlayInterval: 1500, //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
        $SlideshowOptions: {//[Optional] Options to specify and enable slideshow or not
            $Class: $JssorSlideshowRunner$, //[Required] Class to create instance of slideshow
            $Transitions: _SlideshowTransitions, //[Required] An array of slideshow transitions to play slideshow
            $TransitionsOrder: 1, //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
            $ShowLink: true                                    //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
        }
    };

    //Make the element 'slider1_container' visible before initialize jssor slider.
    if (!$('#' + id).attr('jssor-slider')) {
        $("#" + id).css("display", "block");
        sliders[id] = new $JssorSlider$(id, options);
    }

}
function ScaleSlider() {
    var slidersArray = $('div [jssor-slider=true]');
    for (var i = 0; i < slidersArray.length; i++) {
        var parentWidth = $(slidersArray[i]).parent().width();
        if (parentWidth) {
            sliders[$(slidersArray[i]).attr('id')].$ScaleWidth(parentWidth);
        }
        else
            window.setTimeout(ScaleSlider, 30);
    }
}
$(window).scroll(function () {

    if ($(this).scrollTop() > 3300) {
        $('#contact').find('h2').addClass('animated bounceInUp').css('opacity', 1);
    }
    else if ($(this).scrollTop() > 2150) {
        $('#resume').find('h2').addClass('animated bounceInUp').css('opacity', 1);
    }
    else if ($(this).scrollTop() > 1800) {
        $('#skills').find('h2').addClass('animated bounceInUp').css('opacity', 1);
    }
    else if ($(this).scrollTop() > 1000) {
        $('#about').find('h2').addClass('animated bounceInUp').css('opacity', 1);
    }
    else if ($(this).scrollTop() > 200) {
        $('#portfolio').find('h2').addClass('animated bounceInUp').css('opacity', 1);
    }

});

$(function () {
    $('body').on('click', '.page-scroll a', function (event) {
        var $anchor = $(this);
        a = $anchor.attr('href');
      //  $(a).find('h2').removeClass('animated bounceInLeft bounceInUp').css('opacity', 0);
        debugger;
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        setTimeout(function () {
            $(a).find('h2').addClass('bounceInLeft').css('opacity', 1);
        }, 1000);
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 100
});
$('.portfolio-modal').on('show.bs.modal', function (a, b, n, m) {
    initializeSlider($(this).find('.slider-container').attr('id'));
    $(this).find('h2').addClass('animated bounceIn');
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

