$(document).ready(function () {
   $('.item-home__questions').click(function (event) {
      if($('.item-home__task-body').hasClass('only-one')) {
         $('.item-home__questions').not($(this)).removeClass('active');
         $('.item-home__answer').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   })
})