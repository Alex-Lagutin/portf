$(function(){

	$(window).scroll(function() {
		if ($(window).scrollTop() >=200) {
				$('.header').addClass('sticky', 'header__top--sticky')	
		} else {
				$('.header').removeClass('sticky', 'header__top--sticky')
		}
			if ($(window).scrollTop() >=200) {
				$('.header__top').addClass('header__top--sticky')	
		} else {
				$('.header__top').removeClass('header__top--sticky')
		}
	}); 

	const headerHeight = $('.header').outerHeight();

	$('.menu a, .header__arrow, .logo ').on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - headerHeight;
		$('body,html').animate({scrollTop: top}, 1500);
		
	});

		var mixer = mixitup('.portfolio__content');
	});


  $('.menu__btn, .menu a').on('click', function(){
    $('.menu__btn,.menu').toggleClass('active');
    $('body').toggleClass('lock');
  
});

