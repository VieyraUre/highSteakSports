(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var tnsSingle = function tnsSingle() {
	var slider = tns({
		container: '#tnsSingle',
		items: 1,
		slideBy: 1,
		controls: false,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayButtonOutput: false,
		speed: 1000,
		mode: 'gallery',
		mouseDrag: true,
		controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
	});
};

var tnsSingleGames = function tnsSingleGames() {
	var slider = tns({
		container: '#tnsSingleGames',
		items: 1,
		slideBy: 1,
		speed: 1000,
		nav: false,
		mode: 'gallery',
		mouseDrag: true,
		controlsText: ['<i role="button" class="fas fa-chevron-left"></i>', '<i role="button" class="fas fa-chevron-right"></i>']
	});
};

exports.tnsSingle = tnsSingle;
exports.tnsSingleGames = tnsSingleGames;

},{}],2:[function(require,module,exports){
'use strict';

var _tnsSlider = require('./components/tns-slider');

(0, _tnsSlider.tnsSingle)();
(0, _tnsSlider.tnsSingleGames)();

// import {tnsSingle, tnsSingleGames, tnsSinglePromotions} from './components/tns-slider';


// (()=>{
// 	topNav();
// 	if (document.body.classList.contains('home') || document.body.classList.contains('inicio')) {	
// 		tnsSingle();
// 		tnsSingleGames();

// 		// functions here
// 	}else if (document.body.classList.contains('banking') || document.body.classList.contains('banca')) {
// 		multilanguages('banking.html' , 'banca.html');
// 		tabs();
// 		// functions here
// 	}
// })();

},{"./components/tns-slider":1}]},{},[2]);

//# sourceMappingURL=scripts-min.js.map
