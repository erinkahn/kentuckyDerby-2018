"use strict";

(function () {
	console.log("Hello World from app.js, transpiled and concatenated!");
})();

// ROSE PAGE ANIMATION---------------------------------------------------

var rosetl = new TimelineMax();

rosetl.staggerFrom(".rose1", 3, { top: -2000, left: 300, opacity: 0, yoyo: false, delay: 0 });
rosetl.staggerFrom(".rose2", 3, { top: -2000, opacity: 0, yoyo: false, delay: 0 });
rosetl.staggerFrom(".rose3", 3, { top: -2000, left: 83, right: 3, opacity: 0, yoyo: false, delay: 0 });

// RECIPE POP UP --------------------------------------------------------

function div_show() {
	document.querySelector(".recipePopup").style.display = "block";
	document.querySelector("#closeRecipe").style.display = "block";
}

function div_hide() {
	document.querySelector("#closeRecipe").style.display = "none";
	document.querySelector(".recipePopup").style.display = "none";
}

// ATTRACT LOOP VIDEO---------------------------------------------------

//click event on the body/window to hide video
// window.addEventListener("click", resetTimer);
// var screenTimer = setTimeout(inactive, 10 * 1000);


// //once you reset the timer show video and go back to homepage
// function inactive() {


// 	var derbyVideo = document.querySelector(".bigVideo");
// 	var enterButton = document.querySelector(".enterHere");

// 	if (derbyVideo) {
// 		// show video
// 		enterButton.style.display = "block";
// 		derbyVideo.style.display = "block";

// 	} else {
// 		 // go to homepage
// 		window.location.href = "index.html";
// 	}
// }

// //reset timer
// function resetTimer(){

// 	var derbyVideo = document.querySelector(".bigVideo");
// 	var enterButton = document.querySelector(".enterHere");

// 	console.log("reset the timer");

// 	//if the derby video is showing then set its display to none
// 	if (derbyVideo) {
// 		derbyVideo.style.display = "none";
// 		enterButton.style.display = "none";
// 	}

// 	clearTimeout(screenTimer);

// 	screenTimer = setTimeout(inactive, 60 * 1000);
// }
//# sourceMappingURL=app.js.map
