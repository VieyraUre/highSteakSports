const tnsSingle = ()=> {
	const slider = tns({ 
		container           : '#tnsSingle',
		items               : 1, 
		slideBy             : 1,
		controls 			: false,
		autoplay			: true,
		autoplayHoverPause	: true,
		autoplayButtonOutput: false,
		speed               : 1000,
		mode                : 'gallery',
		mouseDrag           : true,
		controlsText: [ 
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>'
			]
		}); 
};


const tnsSingleGames = ()=> {
	const slider = tns({ 
		container           : '#tnsSingleGames',
		items               : 1, 
		slideBy             : 1,
		speed               : 1000,
		nav					: false,
		mode                : 'gallery',
		mouseDrag           : true,
		controlsText: [ 
			'<i role="button" class="fas fa-chevron-left"></i>',
			'<i role="button" class="fas fa-chevron-right"></i>'
			]
		}); 
};

export {
	tnsSingle,
	tnsSingleGames
}
