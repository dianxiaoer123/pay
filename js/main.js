$( document ).ready(function() {
	$('.base-slider .owl-stage').owlCarousel({
		loop:true,
		margin: 0,
		nav: true,
		autoPlay: true,
		autoPlay: 3000,
		navText: ["<img src='images/arrow-left.png'>","<img src='images/arrow-right.png'>"],
		dots: false,
		items:1,
		responsive:{
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
	// $('.base-slider, .owl-stage').owlCarousel({
	// 	loop: true,
	// 	margin: 0,
	// 	nav: true,
	// 	autoPlay: true,
	// 	autoPlay: 3000,
	// 	navText: ["<img src='images/arrow-left.png'>","<img src='images/arrow-right.png'>"],
	// 	dots: false,
	// 	items: 1,
	// 	// responsive:{
	// 	// 	0:{
	// 	// 		items:1
	// 	// 	},
	// 	// 	600:{
	// 	// 		items:1
	// 	// 	},
	// 	// 	1000:{
	// 	// 		items:1
	// 	// 	}
	// 	// }
	// });

	$('.mobile-menu-btn').on('click', function(){
		$(this).toggleClass('active');
		$('header').toggleClass('active');
		$('body').toggleClass('mobile-menu-open');
	});

});
