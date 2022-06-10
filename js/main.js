$(function(){
  var mixer = mixitup('.portfolio__content');
});

$(function(){
  $('.menu__btn').on('click', function(){
    $('.menu__btn,.menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});