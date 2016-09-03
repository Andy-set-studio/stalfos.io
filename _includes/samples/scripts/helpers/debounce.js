var debouncedFunction = debounce(function() {
	
	// Handle your resize event with care
	// knowing that it'll only fire once every 250ms
	
}, 250);

// Run resize through the debouncer
window.addEventListener('resize', debouncedFunction);