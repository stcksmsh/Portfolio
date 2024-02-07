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


const slideNames = ['13S112OS1', 'EmojiType', 'BeogradPlusPlus', 'JSOpeN', 'OSCalc'];
const slideDescriptions = ['RISC-V project kernel for the course Operating Systems 1',
'EmojiType - Emojis on the fly',
'BeogradPlusPlus - Pointing out flaws in the public transport ticket system',
'JSOpeN - Lightweight JSON parser for Java',
'OSCalc - Simple spreadsheet program'];

const slideshowContainer = document.getElementsByClassName("slideshow-container")[0];
if(slideshowContainer == undefined) {
    console.log('slideshowContainer is undefined');
}
for (var i = slideNames.length - 1; i >= 0; i--) {
    let div = document.createElement('div');
    div.classList = ['mySlides'];
    let innerDiv = document.createElement('div');
    innerDiv.classList = ['numbertext'];
    innerDiv.innerHTML = (i + 1).toString() + ' / ' + (slideNames.length).toString();
    div.appendChild(innerDiv);
    let a1 = document.createElement('a');
    a1.href = slideNames[i];
    let img = document.createElement('img');
    img.src = './images/' + slideNames[i] + '.png';
    img.classList = ['slideshow-image'];
    a1.appendChild(img);
    div.appendChild(a1);
    div.appendChild(document.createElement('br'));
    div.appendChild(document.createElement('br'));
    let a2 = document.createElement('a');
    a2.href = slideNames[i];
    let adiv = document.createElement('div');
    adiv.classList = ['text'];
    adiv.innerHTML = slideDescriptions[i];
    a2.appendChild(adiv);
    div.appendChild(a2);
    // slideshowContainer.appendChild(div);   
    slideshowContainer.prepend(div);
}

let div = document.createElement('div');
div.style.textAlign = 'center';
div.appendChild(document.createElement('br'));
for (var i = 0; i < slideNames.length; i++) {
    let span = document.createElement('span');
    span.classList = ['dot'];
    span.onclick = function() {
        currentSlide(i);
    }
    div.appendChild(span);
}
slideshowContainer.appendChild(div);


let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let slideIndex = 1;
showSlides(1);

function plusSlides(n) {
    showSlides(slideIndex + n);
}

function currentSlide(n) {
    showSlides(n);
}

function showSlides(n) {
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