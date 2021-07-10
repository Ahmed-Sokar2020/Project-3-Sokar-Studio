$(function (){

    "use strict";

    //Trigger Nice Scroll Plugin
    $("html").niceScroll({
        cursorcolor:"#F7600E",
        cursorwidth:"10px",
        cursorborder: "1px solid #F7600E", 
        cursorborderradius: 0,
    });

    //  Adjust Header Height
    $(".header").height($(window).height());

    // Scroll To Features
    $(".header .arrow i").click(function(){
        $("html, body").animate({
            scrollTop: $(".features").offset().top
        }, 1000)
    });


    // Show Hidden Items From Our Work
    $('.show-more').click(function(){
        $('.our-work .hidden').fadeIn(2000);
    });

    $(".bxslider").bxSlider();


    $('.header .intro .work').click(function(){
        $('html, body').animate({
            scrollTop:$('.our-work').offset().top
        }, 1000);
    });

    $('.header .intro .hire').click(function(){
        $('html, body').animate({
            scrollTop:$('.contact').offset().top
        }, 2000);
    });

    $('.contact .back').click(function(){
        $('html, body').animate({
            scrollTop:$('.header').offset().top
        }, 2000);
    });


});