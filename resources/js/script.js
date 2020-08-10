
/* This ensures that our code will run after docuent has been loaded. */
$(document).ready(function() {
    
    
    /* for Sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px' // this will happen 60px before we hit the section we defined.
    });
    
   
    /* Scroll on buttons */
    $('.js--scroll-to-plan').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%' // this will happen 50% before we hit the section we defined.
    });
    
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%' // this will happen 50% before we hit the section we defined.
    });
    
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%' // this will happen 50% before we hit the section we defined.
    });
    
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%' // this will happen 50% before we hit the section we defined.
    });
    
    
    /* Mobile Navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        
        nav.slideToggle(200); /* 0.2s = 200ms */
        
        if (icon.attr('name') === 'menu-outline') {
            icon.attr('name', 'close-outline');
        } else {
            icon.attr('name', 'menu-outline');
        }
    });
    
});