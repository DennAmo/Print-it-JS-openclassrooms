const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const $arrowLeft = document.querySelector(".arrow_left");
const $arrowRight = document.querySelector(".arrow_right");
const $dot = document.querySelectorAll(".dot");
const $image = document.querySelector(".banner-img");

let currentIndex = 0
console.log(slides[currentIndex]);

function next() {
	currentIndex = currentIndex + 1;
	if (currentIndex === 4) {
        currentIndex = 0
    }
	$image.src = slides[currentIndex].image;
	console.log(slides[currentIndex]);
}
function previous() {
    currentIndex = currentIndex - 1
	if (currentIndex === -1) {
		currentIndex = 3
	}
	$image.src = slides[currentIndex].image;
	console.log(slides[currentIndex]);
}

$arrowLeft.addEventListener("click", previous);
$arrowRight.addEventListener("click", next);

