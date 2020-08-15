const body = document.querySelector('body');

const imgNumber = 3; 



function genRandom() {
    const number = Math.floor(Math.random()*imgNumber)
    return number;
};

function paintImage(N){

};

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
};

init();