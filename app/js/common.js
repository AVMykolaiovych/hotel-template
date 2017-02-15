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
		dots:true,
		mouseDrag: false,
		loop:true, //Зацикливаем слайдер
		smartSpeed:1000, //Время движения слайда
		// responsive:{ //Адаптация в зависимости от разрешения экрана
		// 	0:{
		// 		items:1
		// 	},
		// 	600:{
		// 		items:1
		// 	},
		// 	1000:{
		// 		items:1
		// 	}
		// }
	});

});

