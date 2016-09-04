(function($) {

	$.fn.page = function() {
		var elem = $(this),
			tableOfContentsSource = elem.find('.js-page__table-of-contents-source'),
			tableOfContentsTarget = elem.find('.js-page__table-of-contents-target'),
			settings = {
				tableOfContentsWrapperClass: 'list-view-menu',
				tableOfContentsListClass: 'list-view-menu__list',
				tableOfContentsItemClass: 'list-view-menu__item'
			};

		var init = function() {

			loadTableOfContents();

			// On hashchange
			$(window).on('hashchange', function() {

				// Load the target
				var currentTarget = $(':target');

				// If it's a content heading, scroll to it's position minus some padding
				if(currentTarget.parents(elem).any()) {

					$(window).scrollTop((currentTarget.offset().top - 80));
				}
			});
		},

		// Attempt to load the hidden table of contents and clone it to a visible menu
		loadTableOfContents = function() {

			var sourceHtml = '';

			// If there's a source, prep and load
			if(tableOfContentsSource.any()) {

				// Add list class to lists 
				tableOfContentsSource.find('ol,ul').addClass(settings.tableOfContentsListClass);

				// Add item class to items
				tableOfContentsSource.find('li').addClass(settings.tableOfContentsItemClass);

				// Load the html
				sourceHtml = tableOfContentsSource.html();

				// Remove the source
				tableOfContentsSource.remove();
			}


			if(sourceHtml.length) {

				// Add the source html to the target
				tableOfContentsTarget.html('<ul class="' + settings.tableOfContentsWrapperClass + '">' + sourceHtml + '</ul>');
			}
		};

		init();
		return this;
	};

}($));