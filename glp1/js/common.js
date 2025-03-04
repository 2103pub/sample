// JavaScript Document
$(document).ready(function() {
	
	// Smooth scroll
	var headerHeight = $('.header').height();
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = "";
		position = target.offset().top - headerHeight;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
	
	// SP navigation
	$('.header__nav-button').children('button').click(function() {
		$(this).toggleClass('is-open');
		
		if ($(this).hasClass('is-open')) {
			$('.header__nav').addClass('is-active');
		} else {
			$('.header__nav').removeClass('is-active');
		}
	});
	$('.header__nav-item').children('a').click(function() {
		if ($('.header__nav').hasClass('is-active')) {
			$('.header__nav').removeClass('is-active');
		}
		if ($('.header__nav-button').children('button').hasClass('is-open')) {
			$('.header__nav-button').children('button').removeClass('is-open');
		}
	});
	
	// Accordion
	$('.faq__list-item .head').click(function(){
		$(this).toggleClass('is-active');
		$(this).next().toggleClass('is-active')
	});
	
	// Swiper
	var swiper01 = new Swiper('#swiper01', {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	
	var scrollStart = 100;
	var distance = 0;
	$(window).scroll(function() {
		distance = $(this).scrollTop();
		if(distance > scrollStart) {
			$('.header').addClass('is-blur');
		} else {
			$('.header').removeClass('is-blur');
		}
	});
	
});
