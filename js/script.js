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


//====================================================================>

//Отправка формы на почту
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);


		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			alert('Заполните обязательные поля');
		}

	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});
