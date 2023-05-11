$(document).ready(function($){
	"use strict";
  /*--------------------------
   hospital-slider area active    
   ------------------------*/
  $(".hospital-slider").owlCarousel({
            items: 3,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
        });

 /*============================
 related doctor-slider-area
 =============================*/
   $(".related-doctor-slider").owlCarousel({
            items: 2,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
        });


  /*-------------------------------------
  counter-area-active
  --------------------------------------*/
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
  /*----------------------
animated search bar
-----------------------*/
$(".search-btn").click(function(){
  $(".input").toggleClass("active").focus;
  $(this).toggleClass("animate");
  $(".input").val("");
});
/*
   * ----------------------------------------------------------------------------------------
   *  PARALLAX JS
   * ----------------------------------------------------------------------------------------
   */

  var parallaxeffect = $(window);
  parallaxeffect.stellar({
      responsive: true,
      positionProperty: 'position',
      horizontalScrolling: false
  });


$('.main-menu ul li a').click(function () {
  $('.main-menu li a').removeClass("active");
  $(this).addClass("active");
})


//magnefic popup start
$('#youtube-video').magnificPopup({
    type: 'iframe',
        iframe: {
   
  patterns: {
    youtube: {
      index: 'youtube.com/', 
      id: 'v=', 
      src: 'http://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
    }
    

  },
  vimeo: {
  index: 'vimeo.com/',
  id: '/',
  src: '//player.vimeo.com/video/%id%?autoplay=1'
},

  srcAction: 'iframe_src', }

  });

 /*
 * ----------------------------------------------------------------------------------------
 *  CHANGE MENU BACKGROUND JS
 * ----------------------------------------------------------------------------------------
 */
var headertopoption = $(window);
var headTop = $('.header-area');

headertopoption.on('scroll', function () {
    if (headertopoption.scrollTop() > 180) {
        headTop.addClass('sticky');
    } else {
        headTop.removeClass('sticky');
    }
});


/*----------------------
responsive_menu active
-----------------------*/
jQuery('#meanmenu').meanmenu({
  meanScreenWidth: "767"
});

  /*about images effect*/
     $('.one').on('click',function(){
       $('.one .image-details').addClass("active");
       $('.two .image-details').removeClass("active");
      
     });
     $('.two').on('click',function(){
       $('.two .image-details').addClass("active");
       $('.one .image-details').removeClass("active");
      
     })





     
	// WOW Js Active
	new WOW().init();
  
/*
         * ----------------------------------------------------------------------------------------
         *  PARALLAX JS
         * ----------------------------------------------------------------------------------------
         */
      
 




/*-----------------------
video area acive
------------------------*/

  $(".test-popup-link").magnificPopup({
  type: 'image'
  });

  

/*--------------------------
   video area active         
   -----------------------  */

  $(".test-popup-link").magnificPopup({
  type: 'image'
  });


   /*
     * ----------------------------------------------------------------------------------------
     *  SCROOL TO UP JS
     * ----------------------------------------------------------------------------------------
     */
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 250) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
 
/*
   * ----------------------------------------------------------------------------------------
   *  SMOOTH SCROOL JS
   * ----------------------------------------------------------------------------------------
   */

  $('a.smoth-scroll').on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top - 50
      }, 1000);
      e.preventDefault();
  });


    

     //sticky nav

  $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 50) {
    $(".header-bottom").removeClass("scroll_class");
   }else{
    $(".header-bottom").addClass("scroll_class");
   }
  })



    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

}(jQuery));