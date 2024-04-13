const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	},
]

const $arrowLeft = document.querySelector(".arrow_left");
const $arrowRight = document.querySelector(".arrow_right");
const $dots = document.querySelector(".dots");
const $bannerImg = document.querySelector(".banner-img");

let currentIndex = 0
console.log(slides[currentIndex]);

slides.forEach((slides, currentIndex) => {
	let $dot = document.createElement("div")
	$dots.appendChild($dot);
	$dot.classList.add("dot");
	if (currentIndex === 0) {
		$dot.classList.add("dot_selected");
	}
	$dot.addEventListener("click", () => {
		dotImage(currentIndex);
		document.querySelectorAll(".dot").forEach(dot => {
			dot.classList.remove("dot_selected");
		});
		$dot.classList.add("dot_selected");
	});
});

function dotImage(index) {
    currentIndex = index;
	$bannerImg.src = slides[currentIndex].image;
	console.log(slides[currentIndex]);
}

function next() {
	currentIndex = currentIndex + 1;
	if (currentIndex === 4) {
		currentIndex = 0
	}
	$bannerImg.src = slides[currentIndex].image;
	console.log(slides[currentIndex]);
	updateDotSelection();
}

function previous() {
	currentIndex = currentIndex - 1
	if (currentIndex === -1) {
		currentIndex = 3
	}
	$bannerImg.src = slides[currentIndex].image;
	console.log(slides[currentIndex]);
	updateDotSelection();
}

function updateDotSelection() {
    document.querySelectorAll(".dot").forEach(dot => {
        dot.classList.remove("dot_selected");
    });
    document.querySelectorAll(".dot")[currentIndex].classList.add("dot_selected");
}

$arrowLeft.addEventListener("click", previous);
$arrowRight.addEventListener("click", next);

