/* -----------------------------------------------------------------------------

    OX - Advanced Personal Resume / CV vCard Template

    File:           JS Custom
    Version:        1.0
    Last change:    09/22/2017

-------------------------------------------------------------------------------- */

(function($) {

    'use strict';

    new WOW().init();


    $("#container-mixItUp").mixItUp();

    /*-----------------------------------------------------------------------------------*/
    /*  * Start Preloader
    /*-----------------------------------------------------------------------------------*/

    var win = $(window);

    win.on('load',function() {

        $('#loader').delay(1500).fadeOut('slow');
        $("body").addClass("visibility-item");
        $("html, body").animate({
            scrollTop: $("html").offset().top
        });
    });

    /*-----------------------------------------------------------------------------------*/
    /*  * Start Navigation Bar
    /*-----------------------------------------------------------------------------------*/

      var trigger = $('.hamburger'),
          overlay = $('.overlay'),
         isClosed = false;

        trigger.click(function () {
          hamburger_cross();
        });

        function hamburger_cross() {

          if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
          } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
          }
      }


      $('[data-toggle="offcanvas"]').on('click', function () {
            $('#wrapper').toggleClass('toggled');

      });


    function menuCloseScrool () {

        $(".hamburger").removeClass("is-open");
        $(".hamburger").addClass("is-closed");
        $("#wrapper").removeClass("toggled");
        $(".overlay-page").fadeToggle("overlay");

        hamburger_cross();
    }


    /*-----------------------------------------------------------------------------------*/
    /*  * Start Header Home
    /*-----------------------------------------------------------------------------------*/

    $(".home .section-left-home img, .home .section-right-home").height($(window).height());

    $(window).resize(function(){

        $(".home .section-left-home img, .home .section-right-home").height($(window).height());
    });

    $(".home .section-right-home .box-me .contents-header-home .view-more-header").mouseenter(function(){
        $(".home .section-right-home .box-me .contents-header-home .view-more-header i.ion-ios-arrow-thin-right").fadeIn("slow");
    });

    $(".home .section-right-home .box-me .contents-header-home .view-more-header").mouseleave(function(){
        $(".home .section-right-home .box-me .contents-header-home .view-more-header i.ion-ios-arrow-thin-right").fadeOut("slow");
    });

    var typed = new Typed('#typed', {

    stringsElement: '#typed-strings',
    backDelay: 200,
    typeSpeed: 100,
    loop: true

    });

    $(".home .section-right-home .box-me .contents-header-home .view-more-header").on('click', function(){

        $("body").addClass("fadeScroll");

        $("html, body").animate({
            scrollTop: $(".about").offset().top
        },1000);


    /* Start About Me  */

    $(".about .about-box-img .img-story img").outerHeight($(".about .about-story").outerHeight());

    $(window).resize(function (){

        $(".about .about-box-img .img-story img").outerHeight($(".about .about-story").outerHeight());
    });

    });

    /*-----------------------------------------------------------------------------------*/
    /*  Start Welcome Services
    /*-----------------------------------------------------------------------------------*/

    $(".welcome-services .bg-overly-services").outerHeight($(".welcome-services").outerHeight());

    $(window).resize(function(){

        $(".welcome-services .bg-overly-services").outerHeight($(".welcome-services").outerHeight());

    });

    /*-----------------------------------------------------------------------------------*/
    /*  Start My Skills
    /*-----------------------------------------------------------------------------------*/

    $(".skills .box-skills-img img").outerHeight($(".skills .box-skills").outerHeight());

    $(window).resize(function(){

        $(".skills .box-skills-img img").outerHeight($(".skills .box-skills").outerHeight());

    });

    /*-----------------------------------------------------------------------------------*/
    /*  Start What I'm Do
    /*-----------------------------------------------------------------------------------*/

    $(".skills .box-what-i-do-img img").outerHeight($(".skills .what-i-do .box-what-i-do").outerHeight());

    $(window).resize(function(){

        $(".skills .box-what-i-do-img img").outerHeight($(".skills .what-i-do .box-what-i-do").outerHeight());

    });

    /*-----------------------------------------------------------------------------------*/
    /*  Start My Portfolio
    /*-----------------------------------------------------------------------------------*/

    $(".portfolio ul.filter-menu li a").mouseenter( function() {

        $("ul.filter-menu li:nth-child(1)").children().removeAttr("id","active-color");
        $("ul.filter-menu li a.active-color").attr("id", "active-color");

    });

    $(".portfolio ul.filter-menu li a").mouseleave( function() {

        $("ul.filter-menu li a.active-color").removeAttr("id", "active-color");

    });


    /*-----------------------------------------------------------------------------------*/
    /*  Start Want To Work With Me!
    /*-----------------------------------------------------------------------------------*/

    $(".want-work .overlay-want-work").outerHeight($(".want-work").outerHeight());

    $(window).resize(function(){

        $(".want-work .overlay-want-work").outerHeight($(".want-work").outerHeight());

    });

    /*-----------------------------------------------------------------------------------*/
    /*  Start Contact Me
    /*-----------------------------------------------------------------------------------*/

    $(".overly-contact-me").outerHeight($(".contact").outerHeight());

    $(window).resize(function(){

        $(".overly-contact-me").outerHeight($(".contact").outerHeight());

    });

    /*-----------------------------------------------------------------------------------*/
    /*  Start Smooth Scroll To Sections
    /*-----------------------------------------------------------------------------------*/

    $(".scroll-home").on('click', function() {

        menuCloseScrool();
        $("body").addClass("fadeScroll");
        $("html, body").animate({
            scrollTop: $("#header-home").offset().top
        },1000);

    });

    $(".scroll-about").on('click', function() {

        menuCloseScrool();
        $("body").addClass("fadeScroll");
        $("html, body").animate({
            scrollTop: $("#about").offset().top
        },1000);

    });

    $(".scroll-services").on('click', function() {

        menuCloseScrool();
        $("body").addClass("fadeScroll");
        $("html, body").animate({
            scrollTop: $("#services").offset().top + 20
        },1000);

    });

    $(".scroll-skills").on('click', function() {

        menuCloseScrool();
        $("body").addClass("fadeScroll");
        $("html, body").animate({
            scrollTop: $("#skills").offset().top + 20
        },1000);

    });

    $(".scroll-portfolio").on('click', function() {

        menuCloseScrool();
        $("body").addClass("fadeScroll");
        $("html, body").animate({
            scrollTop: $("#portfolio").offset().top + 20
        },1000);

    });

    $(".scroll-my-blogs").on('click', function() {

        menuCloseScrool();
        $("body").addClass("fadeScroll");
        $("html, body").animate({
            scrollTop: $("#blog").offset().top + 20
        },1000);

    });

    $(".scroll-contact").on('click', function() {

        menuCloseScrool();
        $("body").addClass("fadeScroll");
        $("html, body").animate({
            scrollTop: $("#contact").offset().top
        },1000);

    });

    $(".about .about-box-story .about-story .btn-hire-me, .w-btn-contant-me button.btn").on('click', function() {

        $("html, body").animate({
            scrollTop: $("#contact").offset().top
        },1000);

    });


    $(".welcome-services .welcome-sev button").on('click', function() {

        $("body").addClass("fadeScroll");
        $("html, body").animate({
            scrollTop: $("#skills").offset().top + 20
        },1000);

    });








}(jQuery));

/*-----------------------------------------------------------------------------------*/
/*      * End
/*-----------------------------------------------------------------------------------*/
