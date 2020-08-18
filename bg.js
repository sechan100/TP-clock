const body = document.querySelector('body');
const bgBtn = document.querySelector('#bg_Btn')
const imgNumber = 4; 



function genRandom() {
    const number = Math.floor(Math.random()*imgNumber)
    return number + 1;
};

function paintImg(){
    const img = new Image();
    const random_N = genRandom();
    img.src = `img/${random_N}.webp`;
    body.appendChild(img);
    img.id = `bg${random_N}`;
    img.classList.add("bgimage")
};

function handle_bg() {
    bgBtn.addEventListener('click',paint_other_Img);
};

function paint_other_Img() {
    const bg = document.querySelector('.bgimage')
    var ran_id= "none";
    for(let i = bg.id; i !== ran_id;){
        const random_N = genRandom();
        var ran_id = `bg${random_N}`
        genRandom();
    };
    const img = new Image();
    img.src = `img/${random_N}.webp`;
    body.appendChild(img);
    img.id = `bg${random_N}`;
    img.classList.add("bgimage")
};


function init() {
    paintImg();
    handle_bg();
};

init();