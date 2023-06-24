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
    // div.textContent = skills[i];
    div.innerHTML += skills[i];
    skillWrapper.appendChild(div);
}

;
document.getElementsByName('colorpicker1')[0].addEventListener("change", (event)=>{document.documentElement.style.setProperty('--color1', event.target.value);})

document.getElementsByName('colorpicker2')[0].addEventListener("change", (event)=>{document.documentElement.style.setProperty('--color2', event.target.value);});

document.getElementsByName('colorpicker3')[0].addEventListener("change", (event)=>{document.documentElement.style.setProperty('--color3', event.target.value);});

document.getElementsByName('colorpicker4')[0].addEventListener("change", (event)=>{document.documentElement.style.setProperty('--color4', event.target.value);});

document.getElementsByName('timepicker')[0].addEventListener("change", (event) => {document.documentElement.style.setProperty('--time', 30 - event.target.value + 's');})
