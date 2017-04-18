(function($) {

	$.fn.hamburger = function() {
		var elem = $(this),
			settings = {
				activeClass: 'is-active',
				target: '',
				targetAttr: 'data-menu-id'
			};

		var init = function() {

			// Determine the target 
			settings.target = elem.attr('href');
			
			// Run the toggle method because the hash may already be set
			toggle();

			// Bind toggle to hashchange
			$(window).on('hashchange', function() {
				toggle();
			});

			// Element on click: run the reset if active
			elem.on('click', function(evt) {

				if(elem.hasClass(settings.activeClass)) {
					evt.preventDefault();
					reset();
				}
			});
		},

		// Determine if menu should be open or not. Toggle elem active state accordingly
		toggle = function() {

			if(location.hash == settings.target) {
				elem.addClass(settings.activeClass);
			}
			else {
				elem.removeClass(settings.activeClass);
			}
		},

		// Reset the hash and remove active state from trigger
		reset = function() {
			
			location.hash = "";
			elem.removeClass(settings.activeClass);
		};

		init();
		return this;
	};

}($));