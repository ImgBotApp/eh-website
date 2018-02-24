/* global jQuery */
(function($) {
	'use strict';

	var $document = $(document),
		stickyNavFunc = function() {
			$(window).scroll(function() {
				var distanceFromTop = $(document).scrollTop(),
					$navbar = $('.navbar');
				
				distanceFromTop >= $('#herotop').height() ? 
				$navbar.fadeIn(400)
					   .addClass('animated slideInDown fixed') :
				$navbar.removeClass('slideInDown')
					   .addClass('fadeOutUp')
					   .fadeOut(300)
					   .removeClass('fixed');
			});
		},
		slickFunc = function () {
			var $multipleItems = $('.multiple-items'),
				slickOptions = {
					infinite: true,
					slidesToShow: 2,
					dots: true,
					arrows: false,
					mobileFirst: true,
					focusOnSelect: true,
					variableWidth: true,
					autoplay: true,
					autoplaySpeed: 5000,
					cssEase: 'cubic-bezier(0.86, 0, 0.07, 1)',
					useTransform: true,
					speed: 1000,
					lazyLoad: 'ondemand'
				}
			$multipleItems.slick(slickOptions);
		},
		progressBarFunc = function () {
			var winHeight = $(window).height(), 
				docHeight = $(document).height(),
				progressBar = $('progress'),
				max, value;

			/* Set the max scrollable area */
			max = docHeight - winHeight;
			progressBar.attr('max', max);

			$(document).on('scroll', function(){
				value = $(window).scrollTop();
				progressBar.attr('value', value);
			});
		},
		isScrolledIntoView = function(elem) {
			var docViewTop = $(window).scrollTop(),
				docViewBottom = docViewTop + $(window).height(),
				elemTop = $(elem).offset().top,
				elemBottom = elemTop + $(elem).height();

			return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
		},
		fadeInFunc = function () {
		// If element is scrolled into view, fade it in
			$(window).scroll(function() {
				$('.scrolled .animated').each(function() {
				if (isScrolledIntoView(this) === true) {
					$(this).addClass('fadeInLeft');
				}
				});
			});
		};

	$document.on({
		ready: function() {
			stickyNavFunc();
			slickFunc();
			progressBarFunc();
			fadeInFunc();
		}
	});
})(jQuery);