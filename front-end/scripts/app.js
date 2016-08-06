/*------------------------------------*\
    CENTRAL APP MASTER 
    
    This file includes the module placeholders system that allows modular 
    binding of custom methods / plugins etc. 
    
    EXAMPLE
    
    <div data-module="example1,example2"></div> 
    
    The above would meet two conditions in the below switch statement.
    
\*------------------------------------*/
var app = (function($) {
	
	// This method will run when the DOM is ready. 
	var init = function() {
		
		// Find any module placeholders 
		var modulePlaceholders = $('[data-module]');
		
		if(modulePlaceholders.any()) {
			
			// Loop each placeholder
			modulePlaceholders.each(function() {
				
				var elem = $(this),
					modules = elem.attr('data-module');
				
				// If any modules found	
				if(modules) {
					
					// Split on the comma 
					modules = modules.split(',');
					
					// Loop each module key
					$.each(modules, function(i, module) {
						
						// Run switch to bind each module to each key
						switch(module) {
							
							case 'page':
								elem.page();
								break;
							
						}
						
					});
				}
			});
		}

	};
	
	return {
		init: init
	}
	
}(window.$));

// RUN!!
app.init();