


var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

for(var i = 0; i < navMenuAnchorTags.length; ++i) {
	navMenuAnchorTags[i].addEventListener('click', function(event) {

		event.preventDefault();



		var targetSectionID = this.textContent.trim().toLowerCase();
		// console.log(targetSectionID);


		var targetSection = document.getElementById(targetSectionID);

		if(targetSectionID == "contact") {

			var interval = setInterval(function() {
			
				var coordinates = targetSection.getBoundingClientRect();

				if(coordinates.top <= 390) {
					clearInterval(interval);
					return;
				}
				window.scrollBy(0, 25);
			}, 4);
			return;
		}		
		
		var interval = setInterval(function() {
				var coordinates = targetSection.getBoundingClientRect();


			if(coordinates.top <= 0) {
				clearInterval(interval);
				return;
			}

			window.scrollBy(0, 25);
		}, 6);


	});
}



//Auto fill skill bars
window.addEventListener('scroll', checkScroll);
var progressBars = document.querySelectorAll('.skill-progress > div');
console.log(progressBars);

var done = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

function initialiseBar(bar) {
	bar.style.width = 0 + '%';
}

function fillBar(bar) {

	let targetWidth = bar.getAttribute('data-bar-width');

	let currentWidth = 0;
	let interval = setInterval(function() {
		if(currentWidth >= targetWidth) {
			clearInterval(interval);
			return;
		}
		currentWidth++;
		bar.style.width = currentWidth + '%';
	}, 5);
}


function checkScroll() {

	for(let i = 0; i < 18; ++i) {
		var bar = progressBars[i];
		console.log(bar);
		var coordinates = bar.getBoundingClientRect();
		if(coordinates.top < window.innerHeight && !done[i]) {
			fillBar(bar);
			done[i] = true;
		}else if(coordinates.top > window.innerHeight) {
			initialiseBar(bar);
			done[i] = false;
		}
	}
}
