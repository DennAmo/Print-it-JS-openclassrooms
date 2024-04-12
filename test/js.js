document.addEventListener("DOMContentLoaded", () => {
  const $carousel = document.querySelector(".carousel");
  const $slides = document.querySelectorAll(".slide");
  const $dots = document.querySelectorAll(".nav-dot");

  let currentIndex = 0;
  $dots[currentIndex].classList.add("active");

  const updateCarousel = (index) => {
    $carousel.style.transform = `translateX(-${index * 25}%)`;
    $dots.forEach((dot, idx) => dot.classList.toggle("active", idx === index));
    currentIndex = index;
  };

  const goToSlide = (index) => updateCarousel(index);
  setInterval(() => goToSlide((currentIndex + 1) % $slides.length), 5000)

  $dots.forEach((dot, index) => dot.onclick = () => goToSlide(index));
  document.querySelector(".carousel-prev").onclick = () => goToSlide((currentIndex - 1 + $slides.length) % $slides.length);
  document.querySelector(".carousel-next").onclick = () => goToSlide((currentIndex + 1) % $slides.length);
});
