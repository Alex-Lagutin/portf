$(function(){

	$(".menu a, .header__arrow, .logo ").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

		var mixer = mixitup('.portfolio__content');
	});


  $('.menu__btn, .menu a').on('click', function(){
    $('.menu__btn,.menu').toggleClass('active');
    $('body').toggleClass('lock');
  
});

