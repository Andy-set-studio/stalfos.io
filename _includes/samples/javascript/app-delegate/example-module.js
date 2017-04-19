(function($) {

	$.fn.exampleModule = function() {

		// THIS IS THE ELEMENT THAT YOUR BOUND THE MODULE TO
		var elem = $(this), 
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