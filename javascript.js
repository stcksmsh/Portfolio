const skills = ['C', 'Java', 'C++',
    'Python', 'RaspberryPI', 'TensorFlow',
    'git', 'RISC-V', 'AArch64'
]

const skillWrapper = document.getElementById('skills')
let rows = ~~((skills.length + 2) / 3);
skillWrapper.style.gridTemplateRows = 'repeat(' + rows.toString() + ', minmax(0, 1fr))';

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
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n >= slideIndex) { /// to the right
        if (n > slides.length) {
            n %= slides.length
        }
        dots[slideIndex - 1].style.backgroundColor = "#bbb";
        slides[slideIndex - 1].getElementsByClassName("slideshow-image")[0].style.animation = "rotateOutRight 2s 1 ease forwards"
        slides[slideIndex - 1].style.animation = "outRight 2s 1 ease forwards"

        dots[n - 1].style.backgroundColor = "#1e1e1ecc";
        slides[n - 1].getElementsByClassName("slideshow-image")[0].style.animation = "rotateInLeft 2s 1 ease forwards"
        slides[n - 1].style.animation = "inLeft 2s 1 ease forwards"
    } else { /// to the left
        if (n < 1) {
            n += slides.length
        }
        dots[slideIndex - 1].style.backgroundColor = "#bbb";
        slides[slideIndex - 1].getElementsByClassName("slideshow-image")[0].style.animation = "rotateOutLeft 2s 1 ease forwards"
        slides[slideIndex - 1].style.animation = "outLeft 2s 1 ease forwards"

        dots[n - 1].style.backgroundColor = "#1e1e1ecc";
        slides[n - 1].getElementsByClassName("slideshow-image")[0].style.animation = "rotateInRight 2s 1 ease forwards"
        slides[n - 1].style.animation = "inRight 2s 1 ease forwards"
    }
    slideIndex = n;
}