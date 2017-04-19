(function($) {

	$.fn.exampleModule = function() {

		
		var elem = $(this), // <- This is the element that you bound the module to
			settings = {
				activeClass: 'is-active'
			};

		var init = function() {
		
			//Parse settings (_helpers.js) from the element
			settings = $.extend(true, {}, settings, elem.parseSettings());

			
		};

		init();
		return this;
	};

}($));