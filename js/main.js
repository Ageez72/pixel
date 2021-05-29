/*global $, console, alert */

$(function () {
    'use strict';
    //scroll to top
    
    var scrollToTop =  $(".scroll-to-top");
        
    $(window).scroll(function () {
           
        if ($(window).scrollTop() >= 1000) {
                
            scrollToTop.fadeIn(400);
        } else {
            scrollToTop.fadeOut(400);
        }
    });
        
    scrollToTop.click(function (e) {
           
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
            
    });
    
        // Add Nice Scroll
    
    $("body").niceScroll();




    
    if ($(window).width() >= 992) {
        // Home Drop Down Menu

        $('.navbar ul li.active').hover(function () {
            $('.home-menu').fadeIn(200);
        },function() {
            $('.home-menu').fadeOut(200)
        }); 
        
        // About Drop Menu

        $('.navbar ul li.about-dropmenu').hover(function () {
            $('.about-menu').fadeIn(200);
        },function() {
            $('.about-menu').fadeOut(200)
        }); 
        
        // Portfolio Drop Menu

        $('.navbar ul li.portfolio-dropmenu').hover(function () {
            $('.portfolio-menu').fadeIn(200);
        },function() {
            $('.portfolio-menu').fadeOut(200)
        });

        // Blog Drop Menu

        $('.navbar ul li.blog-dropmenu').hover(function () {
            $('.blog-menu').fadeIn(200);
        },function() {
            $('.blog-menu').fadeOut(200)
        });
        
        // Contact Drop Menu

        $('.navbar ul li.contact-dropmenu').hover(function () {
            $('.contact-menu').fadeIn(200);
        },function() {
            $('.contact-menu').fadeOut(200)
        });  
    } else {
        // Home Drop Down Menu

        $('.navbar ul li.active').click(function () {
            $('.home-menu').css('position', 'static');
            $('.home-menu').slideToggle(200);

        }); 

        // About Drop Menu

        $('.navbar ul li.about-dropmenu').click(function () {
            $('.about-menu').css('position', 'static');
            $('.about-menu').css('width', 'auto');
            $('.about-menu ul li').css('margin', '0 165px');
            $('.about-menu').slideToggle(200);
        }); 
        
        // Portfolio Drop Menu

        $('.navbar ul li.portfolio-dropmenu').click(function () {
            $('.portfolio-menu').css('position', 'static');
            $('.portfolio-menu').slideToggle(200);
        });

        // Blog Drop Menu

        $('.navbar ul li.blog-dropmenu').click(function () {
            $('.blog-menu').css('position', 'static');
            $('.blog-menu').css('width', 'auto');
            $('.blog-menu ul li').css('margin', '0 165px');
            $('.blog-menu').slideToggle(200);
        });
        
        // Contact Drop Menu

        $('.navbar ul li.contact-dropmenu').click(function () {
            $('.contact-menu').css('position', 'static');
            $('.contact-menu').css('width', 'auto');
            $('.contact-menu ul li').css('margin', '0 165px');
            $('.contact-menu').slideToggle(200);
        });
        
          
    }
    
    // Calc Height Of Main Header

    var navH = $('.navbar').innerHeight(),
        winH = $(window).height();

        $('.main-header').height(winH - navH); 

    // Make Border Left
    $('.items .img-item').hover(function () {
        $('.items .img-item p').animate({
            "border-bottom" : "1px solid #fff"
        },1000)
    }, function() {
        $('.items .img-item p').animate({
            borderBottom : "1px solid #fff" 
         },1000)
    }); 

    //  Change Fixed to Static
    /* $(window).scroll(function () {
       
        
        var navbar = $('.navbar'),
            footer = $('.footer');
        
        if ($(window).scrollTop() >= 200) {
            
            navbar.css('position', 'static');
            footer.removeClass('fixed-bottom');
        } else {
            navbar.css('position', 'fixed');
            footer.css('position', 'fixed');
        }
    }); */

});
