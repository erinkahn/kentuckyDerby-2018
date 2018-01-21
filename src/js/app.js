
(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");
})();


// ROSE PAGE ANIMATION 

var rosetl = new TimelineMax();

rosetl.staggerFrom(".rose1", 0.8, {top: -2000, opacity: 0, yoyo: false, delay: 0});
rosetl.staggerFrom(".rose2", 0.9, {top: -2000, left: 500, opacity: 0, yoyo: false, delay: 0});
rosetl.staggerFrom(".rose3", 0.9, {top: -2000, opacity: 0, yoyo: false, delay: 0});
rosetl.staggerFrom(".rose4", 0.9, {top: -2000, opacity: 0, yoyo: false, delay: 0});
rosetl.staggerFrom(".rose5", 0.9, {top: -2000, right: -300, opacity: 0, yoyo: false, delay: 0});
rosetl.staggerFrom(".rose7", 0.9, {top: -2000, opacity: 0, yoyo: false, delay: 0});
rosetl.staggerFrom(".rose8", 0.9, {top: -2000, left: 80, opacity: 0, yoyo: false, delay: 0});
rosetl.staggerFrom(".rose9", 0.9, {top: -2000, opacity: 0, yoyo: false, delay: 0});
rosetl.staggerFrom(".rose10", 0.9, {top: -2000, opacity: 0, yoyo: false, delay: 0});
rosetl.staggerFrom(".rose11", 0.9, {top: -2000, right: 50, opacity: 0, yoyo: false, delay: 0});
rosetl.staggerFrom([".rose12", ".rose13"], 0.9, {opacity: 0, yoyo: false});
rosetl.staggerFrom([".rose15", ".rose16"], 0.9, {opacity: 0, yoyo: false});
rosetl.staggerFrom([".rose17", ".rose18"], 0.9, {opacity: 0, yoyo: true});
rosetl.staggerFrom([".rose19", ".rose20"], 0.9, {opacity: 0, yoyo: true});


rosetl.to([".rose1", ".rose3", ".rose5", ".rose7", ".rose9", ".rose11"], 1, {rotation: -7, yoyo: true, delay: 0});
rosetl.to([".rose2", ".rose4", ".rose8", ".rose10"], 1, {rotation: 14, yoyo: true, delay: 0});
rosetl.to([".rose12", ".rose13",".rose15"], 1, {rotation: -7, yoyo: true, delay: 0});
rosetl.to([".rose16", ".rose17", ".rose18", ".rose19"], 1, {rotation: 30, yoyo: true, repeat: -1});
rosetl.to([".rose2", ".rose5", ".rose9"], 2, {opacity: 0, yoyo: true, repeat: -1});
rosetl.to([".rose12", ".rose18", ".rose19"], 2, {opacity: 0, yoyo: true, repeat: -1});





//HOME PAGE ANIMATION

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







