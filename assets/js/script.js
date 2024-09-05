$(document).ready(function () {

	/*================
	 Sticky Header
	==================*/

	var wind = $(window);
	var sticky = $('#sticky_header');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 100) {
			sticky.removeClass('sticky_nav');
		} else {
			sticky.addClass('sticky_nav');
		}
	});

	/*================
	 Mobile Menu
	==================*/

	$('.menu-toggle').click(function () {
		$('.nav-menu').slideToggle();
	});

	$('.menu-item-has-children a i').click(function () {
		$(this).parents('a').siblings('.sub-menu').slideToggle();
	});

	/*================
 CounterUp
==================*/

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	/*================
	 Brand Section
	==================*/

	$('.brand-carousel').owlCarousel({
		items: 4,
		loop: true,
		autoplay: true,
		dots: false,
		lazyLoad: true,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 2,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1920: {
				items: 4,
			}
		}
	});

	/*================
	 Hero Slider
	==================*/

	$(".hero-slider").owlCarousel({
		items: 1,
		nav: true,
		navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
		dots: false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		animateOut: 'fadeOut',
	});

	/*================
	 Portfolio Section
	==================*/

	$('.project-carousel').owlCarousel({
		items: 2,
		loop: true,
		autoplay: false,
		autoplayTimeout: 8000,
		center: false,
		dots: true,
		dotsEach: true,
		lazyLoad: true,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		nav: false,
		navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 2,
			},
			1920: {
				items: 4,
			}
		}
	});


	/*================
	 Testimonial
	==================*/

	$('.testimonial.style1 .testi-carousel1').owlCarousel({
		items: 2,
		loop: true,
		autoplay: false,
		autoplayTimeout: 8000,
		margin: 20,
		center: true,
		dots: false,
		dotsEach: true,
		lazyLoad: true,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		nav: true,
		navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			768: {
				nav: false,
				items: 2,
			},
			992: {
				nav: false,
				items: 2,
			},
			1200: {
				items: 3,
				nav: false,
			},
			1920: {
				items: 3,
				nav: true,
			}
		}
	});

	// Style Two

	$('.testi-carousel2').owlCarousel({
		items: 2,
		loop: true,
		autoplay: false,
		autoplayTimeout: 8000,
		margin: 30,
		center: true,
		dots: false,
		dotsEach: true,
		lazyLoad: true,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		nav: true,
		navText: ["<i class='fa-solid fa-arrow-right'></i>", "<i class='fa-solid fa-arrow-left'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			768: {
				nav: false,
				items: 2,
			},
			992: {
				nav: false,
				items: 2,
			},
			1200: {
				items: 3,
				nav: false,
			},
			1920: {
				items: 3,
				nav: false,
			}
		}
	});

	// Style Three

	$('.testi-carousel3').owlCarousel({
		loop: true,
		autoplay: false,
		autoplayTimeout: 8000,
		margin: 30,
		dots: true,
		dotsEach: true,
		lazyLoad: true,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		nav: false,
		navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			768: {
				items: 1,
				nav: false,
			},
			992: {
				items: 1,
				nav: false,
			},
			1920: {
				items: 1,
				nav: false,
			}
		}
	});

	/*================
	 Accordion
	==================*/

	$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

	$('.accordion a').click(function (j) {
		var dropDown = $(this).closest('li').find('p');

		$(this).closest('.accordion').find('p').not(dropDown).slideUp();

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.accordion').find('a.active').removeClass('active');
			$(this).addClass('active');
		}

		dropDown.stop(false, true).slideToggle();

		j.preventDefault();
	});



	/*================
	 breand
	==================*/

	$('.brand-carousel').owlCarousel({
		items: 1,
		loop: true,
		autoplay: false,
		autoplayTimeout: 8000,
		dots: false,
		dotsEach: true,
		lazyLoad: true,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		nav: true,
		navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			768: {
				nav: false,
				items: 2,
			},
			992: {
				nav: false,
				items: 2,
			},
			1200: {
				items: 3,
				nav: false,
			},
			1920: {
				items: 4,
				nav: false,
			}
		}
	});

	/*================
	 Portfolio Tab
	==================*/

	$('.portfolio-item').isotope(function () {
		itemSelector: '.item'
	});

	$('.portfolio-menu ul li').click(function () {
		$('.portfolio-menu ul li').removeClass('active');
		$(this).addClass('active');

		var selector = $(this).attr('data-filter');
		$('.portfolio-item').isotope({
			filter: selector
		})
		return false;
	});

	/*================
	 Venobox
	==================*/

	$('.venobox').venobox({
		numeratio: true,
		infinigall: true
	});

	/*================
	 About Tab
	==================*/

	$('#tabs li a:not(:first)').addClass('inactive');
	$('.tab-content').hide();
	$('.tab-content:first').show();

	$('#tabs li a').click(function () {
		var t = $(this).attr('id');
		if ($(this).hasClass('inactive')) {
			$('#tabs li a').addClass('inactive');
			$(this).removeClass('inactive');

			$('.tab-content').hide();
			$('#' + t + 'C').fadeIn('slow');
		}
	});

	// SERVICES 
	// ================

	// ================
	// SERVICES 
	/*================
	 Search Popup
	==================*/

	if ($('.search-icon').length) {
		$('.search-icon').on('click', function () {
			$('body').addClass('search-active');
		});
		$('.close-search').on('click', function () {
			$('body').removeClass('search-active');
		});
	}

	/*================
 Scroll to Top
==================*/

	if ($('.prgoress_scrollup path').length) {
		var progressPath = document.querySelector('.prgoress_scrollup path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		};
		updateProgress();
		$(window).on('scroll', updateProgress);
		var offset = 250;
		var duration = 550;
		jQuery(window).on('scroll', function () {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.prgoress_scrollup').addClass('active-progress');
			} else {
				jQuery('.prgoress_scrollup').removeClass('active-progress');
			}
		});
		jQuery('.prgoress_scrollup').on('click', function (event) {
			event.preventDefault();
			jQuery('html, body').animate({ scrollTop: 0 }, duration);
			return false;
		});
	}

	/*================
	 Hero Particles
	==================*/

	particlesJS('particles-js',

		{
			"particles": {
				"number": {
					"value": 80,
					"density": {
						"enable": true,
						"value_area": 800
					}
				},
				"color": {
					"value": "#C6E519"
				},
				"shape": {
					"type": "circle",
					"stroke": {
						"width": 0,
						"color": "#000000"
					},
					"polygon": {
						"nb_sides": 5
					},
					"image": {
						"src": "img/github.svg",
						"width": 100,
						"height": 100
					}
				},
				"opacity": {
					"value": 0.5,
					"random": false,
					"anim": {
						"enable": false,
						"speed": 1,
						"opacity_min": 0.1,
						"sync": false
					}
				},
				"size": {
					"value": 3,
					"random": true,
					"anim": {
						"enable": false,
						"speed": 80,
						"size_min": 0.1,
						"sync": false
					}
				},
				"line_linked": {
					"enable": true,
					"distance": 150,
					"color": "#C6E519",
					"opacity": 0.4,
					"width": 1
				},
				"move": {
					"enable": true,
					"speed": 6,
					"direction": "none",
					"random": false,
					"straight": false,
					"out_mode": "out",
					"bounce": false,
					"attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 1200
					}
				}
			},
			"interactivity": {
				"detect_on": "canvas",
				"events": {
					"onhover": {
						"enable": true,
						"mode": "repulse"
					},
					"onclick": {
						"enable": true,
						"mode": "push"
					},
					"resize": true
				},
				"modes": {
					"grab": {
						"distance": 800,
						"line_linked": {
							"opacity": 1
						}
					},
					"bubble": {
						"distance": 800,
						"size": 80,
						"duration": 2,
						"opacity": 0.8,
						"speed": 3
					},
					"repulse": {
						"distance": 200,
						"duration": 0.4
					},
					"push": {
						"particles_nb": 4
					},
					"remove": {
						"particles_nb": 2
					}
				}
			},
			"retina_detect": true
		}

	);


});