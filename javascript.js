const skills = ['C', 'C++', 'Python', 'TensorFlow', 'Java', 'JavaScript', 'RISC-V', 'NodeJS', 'React']

const skillWrapper = document.getElementById('skills')
let rows = (skills.length + 2) / 3;
skillWrapper.style.gridTemplateRows = 'repeat(' + rows.toString() + ', 1fr)';

for (var i = 0; i < skills.length; i++) {
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
showSlides(1);

function plusSlides(n) {
    showSlides(slideIndex + n);
}

function currentSlide(n) {
    showSlides(n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    slides[slideIndex - 1].getElementsByClassName("slideshow-image")[0].style.animation = "rotateOut 2s 1 ease forwards"
    slides[slideIndex - 1].style.animation = "outRight 2s 1 ease forwards"
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = slides.length
    } else {
        slideIndex = n
    }
    slides[slideIndex - 1].getElementsByClassName("slideshow-image")[0].style.animation = "rotateIn 2s 1 ease forwards"
    slides[slideIndex - 1].style.animation = "inLeft 2s 1 ease forwards"
}

function printData(n){
  alert(slides[n].style.animation)
  alert(slides[n].style.visibility)
  alert(slides[n].style.position)
}