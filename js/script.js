//Меню бургер
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
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

//======================================================>
 //Скрыть placeholder при клике
 $(document).ready(function () {
	$('.form__input-container, .form-control').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder'));
		$(this).attr('placeholder', '');
	});
	$('input').blur(function () {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});
});

//======================================================>

//Popup
$('.button__map').click(function(){
	$('.popup').addClass('active');
	$('body').addClass('lock');
});
$('.popup__close').click(function(){
	$('.popup').removeClass('active');
	$('body').removeClass('lock');
});

//Закрытие на оверлей
$('.popup').click( function(e){
	if ( $(e.target).closest('.popup__content').length ) {
		 // клик внутри элемента 
		 return;
	}
	// клик снаружи элемента 
	$('.popup').removeClass('active');
	$('body').removeClass('lock');
});