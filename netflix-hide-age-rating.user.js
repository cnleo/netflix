// ==UserScript==

// @name        Userscript for Netflix (https://www.netflix.com/)

// @description	Removes the annoying age rating fade in at Netflix.
// @description:de Entfernt die nervige Altersfreigabe Einblendung bei Netflix.

// @downloadURL	https://github.com/cnleo/netflix/blob/master/netflix-hide-age-rating.user.js
// @updateURL	https://github.com/cnleo/netflix/blob/master/netflix-hide-age-rating.user.js

// @author		cnleo

// @namespace	cnleo/userscripts

// @grant none

// @match	https://www.netflix.com/*
// @match	http://www.netflix.com/*
// @match	https://netflix.com/*
// @match	http://netflix.com/*

// @version	0.0.2

// @run-at document-end

// ==/UserScript==

function addStylesheetRules(rules) {
	var styleEl = document.createElement('style');

	// Append <style> element to <head>
	document.head.appendChild(styleEl);

	// Grab style element's sheet
	var styleSheet = styleEl.sheet;

	for (var i = 0; i < rules.length; i++) {
		var j = 1,
			rule = rules[i],
			selector = rule[0],
			propStr = '';
		// If the second argument of a rule is an array of arrays, correct our variables.
		if (Array.isArray(rule[1][0])) {
			rule = rule[1];
			j = 0;
		}

		for (var pl = rule.length; j < pl; j++) {
			var prop = rule[j];
			propStr += prop[0] + ': ' + prop[1] + (prop[2] ? ' !important' : '') + ';\n';
		}

		// Insert CSS Rule
		styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length);
	}
}

/* < div class = "player-view-childrens player-view-childrens-static" >
	<
	div class = "nfp-aspect-wrapper" >
	<
	div class = "nfp-aspect-container" >
		*/

//let class_to_hide = 'player-view-childrens.player-view-childrens-static';
//let element_to_hide = document.querySelector(`div.${class_to_remove}`);
//element_to_hide.style.display = 'none !important';

addStylesheetRules([
  ['body div.player-view-childrens',
    ['display', 'none', true]
  ]
]);

/*
addStylesheetRules([
  ['h2', // Also accepts a second argument as an array of arrays instead
    ['color', 'red'],
    ['background-color', 'green', true] // 'true' for !important rules 
  ], 
  ['body div.player-view-childrens', 
    ['display', 'none', true]
  ]
]);*/
