const body = document.querySelector('body');

const imgNumber = 4; 



function genRandom() {
    const number = Math.floor(Math.random()*imgNumber)
    return number + 1;
};

function paintImage(){
    const img = new Image();
    img.src = `img/${genRandom()}.webp`;
    body.appendChild(img);
    img.classList.add("bgimage")
};


function init() {
    paintImage();
};

init();