const skills = ['C', 'C++', 'Python', 'TensorFlow', 'Java', 'JavaScript', 'RISC-V', 'NodeJS', 'React']

const skillWrapper = document.getElementById('skills')
let rows = (skills.length+2)/3;
skillWrapper.style.gridTemplateRows = 'repeat(' + rows.toString() + ', 1fr)';

for (var i = 0; i < skills.length; i++){
    let div = document.createElement('div');
    div.classList = ['skill'];
    let img = document.createElement('img');
    img.classList = ['skill-icon'];
    img.src = './images/' + skills[i] + '.png';
    div.appendChild(img);
    div.innerHTML += skills[i];
    skillWrapper.appendChild(div);
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}