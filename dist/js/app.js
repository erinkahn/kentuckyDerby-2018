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
window.addEventListener("click", function () {

	//reset timer
	var screenTimer;
	resetTimer();

	//get the derby video 
	var derbyVideo = document.querySelector(".bigVideo");

	//hide it when you click the page
	derbyVideo.style.display = "none";
});

window.onload = function () {

	screenTimer = setTimeout(inactive, 10 * 1000);
};

function inactive() {

	var derbyVideo = document.querySelector(".bigVideo");
	derbyVideo.style.display = "block";
}

function resetTimer() {

	var derbyVideo = document.querySelector(".bigVideo");

	console.log("reset the timer");

	derbyVideo.style.display = "none";

	clearTimeout(derbyVideo);

	screenTimer = setTimeout(inactive, 10 * 1000);
}

// right now its only showing the video on the home page
// but i want it to take you back to the home page after
// inactivity, so I shouldn't have to put the video on
// every page. 


//HOME PAGE ANIMATION-------------------------------------------------------

//when one of the boxes is clicked, disperse all the boxes

// var allPages = document.querySelector('.row .col');
// var horses = document.querySelector('.horses .col');
// var timeline = document.querySelector('.timeline .col');
// var facts = document.querySelector('.facts .col');
// var fashion = document.querySelector('.fashion .col');
// var rose = document.querySelector('.rose .col');
// var mint = document.querySelector('.mint .col');

// horses.onload = function() {

// 	var tl = new TimelineMax();

// 	tl.to(horses, 0.1, {top: 330});
// }


// for (var i = 0; i < allPages.length; i++) {
// 	allPages[i].addEventListener('click', function(){
//disperse the boxes in diff directions
//create new class in css
//use tweenmax to move the boxes
// 		horses.onload = function(){
// 			setTimeout(function(e){
// 				if (horses==clicked) {
// 					e.preventDefault();
// 					doAnimation();
// 					linkToNewPage();
// 				}
// 			}, 100);
// 		}
// 	})
// }
//# sourceMappingURL=app.js.map
