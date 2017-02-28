$(function() {

	var search = $('.header__search-input');

	$('.header__search-icon').click(function() {
		if(search.is(':hidden')) {
			search.show(300);
		} else {
			search.hide(300);
		}
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	$('.owl-carousel').owlCarousel({
		items:1,
		nav:true,
		navText: [
		"<i class='icon-left-open slider-icon'></i>",
		"<i class='icon-right-open slider-icon'></i>"
		],
		dots:true,
		mouseDrag: false,
		loop:true, //Зацикливаем слайдер
		smartSpeed:500, //Время движения слайда
		responsiveClass:true,
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	$('.gallery__nav-link').click(function() {
		var checkElement = $(this).next();
		checkElement.stop().animate({'height':'toggle'}, 500);
		if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			return false;
		}
	});



});

