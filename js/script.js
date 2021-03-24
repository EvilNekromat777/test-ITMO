//Меню бургер
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

//======================================================>

//Слайдер на Bootstrap5
const myCarousel = document.querySelector('#carousel');
const carousel = new bootstrap.Carousel(myCarousel, { 
  interval: false,
});