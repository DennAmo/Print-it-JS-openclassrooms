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
	}
]

const $arrowLeft = document.querySelector(".arrow_left");
const $arrowRight = document.querySelector(".arrow_right");
const $dots = document.querySelector(".dots");
const $bannerImg = document.querySelector(".banner-img");
const $banner = document.querySelector("#banner p");
let currentIndex = 0;

console.log(slides[currentIndex]);

for (let i = 0; i < slides.length; i++) {
	let $dot = document.createElement("div")
	$dots.appendChild($dot);
	$dot.classList.add("dot");
	if (i === 0) {
		$dot.classList.add("dot_selected");
	}
	$dot.addEventListener("click", () => {
		dotImage(i);
	});
}

function updateDotSelection() {
	document.querySelectorAll(".dot").forEach(dot => {
		dot.classList.remove("dot_selected");
	});
	document.querySelectorAll(".dot")[currentIndex].classList.add("dot_selected");
	console.log(slides[currentIndex]);
}

function updateContent() {
	$bannerImg.src = slides[currentIndex].image;
	$banner.innerHTML = slides[currentIndex].tagLine;
	updateDotSelection();
}

function dotImage(index) {
	currentIndex = index;
	updateContent()
}

function next() {
	currentIndex = currentIndex + 1;
	if (currentIndex === slides.length) {
		currentIndex = 0;
	}
	updateContent()
}

function previous() {
	currentIndex = currentIndex - 1;
	if (currentIndex < 0) {
		currentIndex = slides.length -1;
	}
	updateContent()
}

$arrowLeft.addEventListener("click", previous);
$arrowRight.addEventListener("click", next);