/* jshint esversion: 6 */
import $ from 'jquery';

export default {
  smoothscroll() {
    $('.smoothscroll').on('click',function (e) {
    	e.preventDefault();

      var target = this.hash,
    	$target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
        window.location.hash = target;
      });
    });
  },

  setDimensions() {
    $('header').css({ 'height': window.innerHeight });
    $(window).on('resize', function() {
      $('header').css({ 'height': window.innerHeight });
      $('body').css({ 'width': window.innerWidth })
    });
  },

  aliveScroll() {
    $(window).on('scroll', function() {
      var h = $('header').height();
      var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

      // Header effects could be configurable
      if ( (y > h*.30) && (y < h) && ($(window).outerWidth() > 768 ) ) {
        // nav.fadeOut('fast');
        nav.addClass('opaque').fadeIn('fast');
      } else {
        if (y < h*.30) {
          nav.removeClass('opaque').fadeIn('fast');
        } else {
          nav.addClass('opaque').fadeIn('fast');
        }
      }
    });
  },
};
