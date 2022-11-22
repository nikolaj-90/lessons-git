$(document).ready(function() {
   $('.button__burger').click(function(event) {
       $('.button__burger, .header__menu').toggleClass('active');
       $('body').toggleClass('lock');
   });
});
