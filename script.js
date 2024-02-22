function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".icon-hamburguer");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function prevSlide() {
  changeSlide(-1);
}

function nextSlide() {
  changeSlide(1);
}