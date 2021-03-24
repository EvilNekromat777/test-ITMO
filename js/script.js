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

//======================================================>

//Accordion
$('.accordion').each(function () {
	let $accordian = $(this);
	$accordian.find('.accordion-head').on('click', function () {
		  $(this).parent().find(".accordion-head").removeClass('open close');
		  $(this).removeClass('open').addClass('close');
		 $accordian.find('.accordion-body').slideUp();
		 if (!$(this).next().is(':visible')) {
				$(this).removeClass('close').addClass('open');
			  $(this).next().slideDown();
		 }
	});
});