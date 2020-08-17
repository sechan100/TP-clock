const namebox = document.querySelector('#namebox');
const hellobox1 = document.querySelector('#hello1');
const logout = document.querySelector('#logout')
const CU = "current User";


function askName() {
    // 2-1. 이름을 물어보는 인풋 출현후 
    // submit하면 savename함수 실행
    namebox.classList.remove('none');
    logout.classList.add('none');
    hellobox1.classList.add('none');
    todoinput.classList.add('none');
    ask_name.classList.remove("none");
    hellobox1.style.display="none";
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
    // 2-1-2 이름을 localStorage에 저장
    localStorage.setItem(CU, n);
};


function greeting(name) {
    // 2-2. 이름 묻는 인풋을 없애고 text를 나타냄
    namebox.classList.add('none');
    ask_name.classList.add("none");
    hellobox1.classList.remove('none');
    logout.classList.remove('none');
    todoinput.classList.remove('none');
    hellobox1.innerText= `Hello, ${name}`;
    hellobox1.style.display="inline";
    logout.addEventListener('click', logoutBtn);
};

function logoutBtn() {
    // 3-1. logout butto을 누르면 akkName함수 실행과 함께
    // localStorage의 currentUser 삭제
    localStorage.removeItem("current User");
    namebox.value = "";
    logout.style.cursor = "pointer";
    askName();
};


function loadName() {   
    // 1. localStorage에 사용자 
    // 정보가  없을 때  input display
    // 현재 사용자 정보가 있을 경우에 greeting 실행
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