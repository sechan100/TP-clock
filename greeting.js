const namebox = document.querySelector('input');
const hellobox1 = document.querySelector('#hello1');
const hellobox2 = document.querySelector('#hello2');
const CU = "current User";



function askName() {
    // 2-1. 이름을 물어보는 인풋 출현후 
    // submit하면 savename함수 실행
    namebox.classList.remove('none');
    hellobox1,hellobox2.classList.add('none');
    namebox.addEventListener('keyup',submit);
};

function submit(e) {
    // 2-1-1 기본 event 후, savename함수 실행
    if(e.keyCode === 13){
        event.preventDefault();
        const namevalue = namebox.value;
        savename(namevalue);
        greeting(namevalue);
    }
};

function savename(n) {
    // 2-1-2 이름을 localStorage에 
    // 저장하고 greeting실행
    localStorage.setItem(CU, n);
};


function greeting(name) {
    // 2-2. 이름 묻는 인풋을 없애고 인사말을 출현시킴
    const currentU = localStorage.getItem(CU);
    namebox.classList.add('none');
    hellobox1,hellobox2.classList.remove('none');
    hellobox1.innerText= "Hello,";
    hellobox2.innerText= name;
};


function loadName() {   
    // 1. localStorage에 사용자 
    // 정보가  없을 때 이름을 물어보는 인풋 출현
    // 현재 사용자 정보가 있으면 인사말을 내보냄
    const currentU = localStorage.getItem(CU);

    if(currentU === null){
        askName();
    } else {
        greeting(currentU);
    }
};


function init() {   
    loadName();
}
init();