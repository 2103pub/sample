// ハンバーガーメニュー
document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger-morph');
	const nav = document.querySelector('.nav-morph');
	const menuLinks = document.querySelectorAll('.nav-morph__link');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		nav.classList.toggle('active');

		const isOpen = hamburger.classList.contains('active');
		hamburger.setAttribute('aria-expanded', isOpen);
		nav.setAttribute('aria-hidden', !isOpen);
		document.body.style.overflow = isOpen ? 'hidden' : '';
	});

	// ホバーエフェクト
	menuLinks.forEach(link => {
		link.addEventListener('mouseenter', () => {
			link.querySelector('.nav-morph__text').style.transform = 'translateY(-100%)';
		});

		link.addEventListener('mouseleave', () => {
			link.querySelector('.nav-morph__text').style.transform = 'translateY(0)';
		});
	});

	// メニュー閉じる
	menuLinks.forEach(link => {
		link.addEventListener('click', () => {
			hamburger.classList.remove('active');
			nav.classList.remove('active');
			hamburger.setAttribute('aria-expanded', false);
			nav.setAttribute('aria-hidden', true);
			document.body.style.overflow = '';
		});
	});
});
// フワッと
document.addEventListener('DOMContentLoaded', () => {
	const targets = document.querySelectorAll('.fade-in');
  
	const observer = new IntersectionObserver((entries) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('visible');
		  // 一度表示したら監視終了（繰り返し出てこないように）
		  observer.unobserve(entry.target);
		}
	  });
	}, {
	  threshold: 0.1
	});
  
	targets.forEach(target => observer.observe(target));
  });
  
//スライダー   
$(document).on('ready', function() {
	$(".sec06_slider").slick({
	  autoplay: true,
	  autoplaySpeed: 4000,
	  dots: true,
	});
  });
//   タブ
$('.sec10_tab_item').on('click', function() {
	var tabIndex = $('.sec10_tab_item').index(this);
	$('.sec10_tab_item, .sec10_panel_item').removeClass('is-active');
	$('.sec10_panel_item').eq(tabIndex).addClass('is-active');
	$(this).addClass('is-active');
  });
//   スワイプ
document.addEventListener('DOMContentLoaded', function () {
	const swiper = new Swiper('.swiper', {
	  loop: true,
	  slidesPerView: 1,
	  spaceBetween: 20,
	  pagination: {
		el: '.swiper-pagination',
		clickable: true,
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	});
  });
// アコーディオン FAQ sec11
$(function () {
    $('.sec08_faq_heading').on('click', function () {
      const content = $(this).next('.sec08_accordion_content');
      $(this).toggleClass('active');
      content.stop(true, true).slideToggle(300);
    });
  });


//アコーディオン sec08 組み合わせ施術 
// 

$(document).ready(function() {

	function toggleMenuImage(img, src1, src2) {
	  const imgTop = img.position().top; 
	  const src = img.attr('src');
  
	  img.fadeOut(100, function() {
		if (src === src1) {
		  img.attr('src', src2);
		} else {
		  img.attr('src', src1);
		  $('.content_wrapper').animate({ scrollTop: imgTop -30 }, 600);
		}
		img.fadeIn(200);
	  });
	}
  
	$('#menu1').click(function() {
	  toggleMenuImage($(this), 'img/menu01.webp', 'img/menu02.webp');
	});
  
	$('#menu2').click(function() {
	  toggleMenuImage($(this), 'img/menu03.webp', 'img/menu04.webp');
	});
  
	// $('#menu3').click(function() {
	//   toggleMenuImage($(this), 'img/menu05.webp', 'img/menu06.webp');
	// });
  
  });
