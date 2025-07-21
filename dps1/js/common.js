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
/*施術メニュー*/ 
document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger-morph');
	const nav = document.querySelector('.nav-morph');
  
	hamburger.addEventListener('click', () => {
	  hamburger.classList.toggle('active');
	  nav.classList.toggle('active');
  
	  const isOpen = hamburger.classList.contains('active');
	  hamburger.setAttribute('aria-expanded', isOpen);
	  nav.setAttribute('aria-hidden', !isOpen);
	  document.body.style.overflow = isOpen ? 'hidden' : '';
	});
  
// メニューリンクのホバーエフェクト用のイベントリスナー
	const menuLinks = document.querySelectorAll('.nav-morph__link');
	menuLinks.forEach(link => {
	  link.addEventListener('mouseenter', () => {
		link.querySelector('.nav-morph__text').style.transform = 'translateY(-100%)';
	  });
  
	  link.addEventListener('mouseleave', () => {
		link.querySelector('.nav-morph__text').style.transform = 'translateY(0)';
	  });
	});
  });
  
  $(function () {
	$('.sec04_btn_open').on('click', function () {
	  const $btn = $(this);
	  const isClosed = $btn.attr('data-state') === 'closed';
  
	  const container = $('.content_wrapper');
	  const target = $('#sec04');
	  const scrollTop = target.offset().top - container.offset().top + container.scrollTop();
  
	  if (isClosed) {
		$('.sec04_menu01').removeClass('visible').fadeOut(500);
		$('.sec04_menu02').fadeIn(500).addClass('visible');
  
		$btn.attr('src', 'img/btn_close01.png');
		$btn.attr('data-state', 'open');
  
		container.animate({ scrollTop: scrollTop }, 500);
  
	  } else {
		$('.sec04_menu02').removeClass('visible').fadeOut(500);
		$('.sec04_menu01').fadeIn(500).addClass('visible');
  
		$btn.attr('src', 'img/btn_open01.png');
		$btn.attr('data-state', 'closed');
  
		container.animate({ scrollTop: scrollTop }, 500);
	  }
	});
  });
//   目元整形
document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger-morph');
	const nav = document.querySelector('.nav-morph');
  
	hamburger.addEventListener('click', () => {
	  hamburger.classList.toggle('active');
	  nav.classList.toggle('active');
  
	  const isOpen = hamburger.classList.contains('active');
	  hamburger.setAttribute('aria-expanded', isOpen);
	  nav.setAttribute('aria-hidden', !isOpen);
	  document.body.style.overflow = isOpen ? 'hidden' : '';
	});
  
// メニューリンクのホバーエフェクト用のイベントリスナー
	const menuLinks = document.querySelectorAll('.nav-morph__link');
	menuLinks.forEach(link => {
	  link.addEventListener('mouseenter', () => {
		link.querySelector('.nav-morph__text').style.transform = 'translateY(-100%)';
	  });
  
	  link.addEventListener('mouseleave', () => {
		link.querySelector('.nav-morph__text').style.transform = 'translateY(0)';
	  });
	});
  });
  
$(function () {
	$('.sec05_btn_open').on('click', function () {
	const $btn = $(this);
	const isClosed = $btn.attr('data-state') === 'closed';
  
	const container = $('.content_wrapper');
	const target = $('#sec05');
	const scrollTop = target.offset().top - container.offset().top + container.scrollTop();
  
	if (isClosed) {
	$('.sec05_menu01').removeClass('visible').fadeOut(500);
	$('.sec05_menu02').fadeIn(500).addClass('visible');
	$btn.attr('src', 'img/btn_close01.png');
	$btn.attr('data-state', 'open');
  
	container.animate({ scrollTop: scrollTop }, 500);
  
	} else {
	$('.sec05_menu02').removeClass('visible').fadeOut(500);
	$('.sec05_menu01').fadeIn(500).addClass('visible');
  
	$btn.attr('src', 'img/btn_open02.png');
	$btn.attr('data-state', 'closed');
  
	container.animate({ scrollTop: scrollTop }, 500);
	}
});
});
//   
$(document).on('ready', function() {
	$(".sec06_slider").slick({
	  autoplay: true,
	  autoplaySpeed: 4000,
	  dots: true,
	});
  });
//   タブ
$('.sec11_tab_item').on('click', function() {
	var tabIndex = $('.sec11_tab_item').index(this);
	$('.sec11_tab_item, .sec11_panel_item').removeClass('is-active');
	$('.sec11_panel_item').eq(tabIndex).addClass('is-active');
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
// アコーディオン（料金）
const accordionItems = document.querySelectorAll('.sec07_accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.sec07_accordion-header');
  const img = header.querySelector('img');
  const body = item.querySelector('.sec07_accordion-body');

  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    // すべて閉じる
    accordionItems.forEach(i => {
      i.classList.remove('active');
      const b = i.querySelector('.sec07_accordion-body');
      b.style.maxHeight = null;
      b.style.opacity = 0;

      const iImg = i.querySelector('img');
      if (iImg && iImg.dataset.close) {
        iImg.src = iImg.dataset.close;
      }
    });

    // クリックしたのが閉じてたら開く
    if (!isOpen) {
      item.classList.add('active');
      body.style.maxHeight = body.scrollHeight + 'px';
      body.style.opacity = 1;

      if (img && img.dataset.open) {
        img.src = img.dataset.open;
      }
    }
  });
});
// アコーディオン FAQ
$(function () {
    $('.sec09_faq_heading').on('click', function () {
      const content = $(this).next('.sec09_accordion_content');
      $(this).toggleClass('active');
      content.stop(true, true).slideToggle(300);
    });
  });

// 
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