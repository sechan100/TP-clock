const todoText = document.querySelector('#todoinput')
const todoList = document.querySelector('#todolist')
const TD = "TDarray"
var TDarray = [];


function handleSubmit(e){
    // 2-1. 사용자가 누른 키가 enter라면, save_paint_Todo 함수실행
    if(e.keyCode === 13 && todoText.value !== ""){
        const text = todoText.value;
        save_paint_Todo(text);
    };
};

function loadTodo() {
// 2-2. localStorage에 TodoList가 있다면 addTodos 함수실행
    const todos = localStorage.getItem(TD);

    if(todos !== null){
        const parsedTDarray = JSON.parse(todos);
        parsedTDarray.forEach(function(todos){
            save_paint_Todo(todos.text);
        });
    };
};

function save_paint_Todo(t){
    // 3. 작성한 todolist의 내용을 화면에 list로 만들고 TDarray에 저장
    // 3-1 todoList 화면에 li로 출력
    todoText.value ="";
    const li = document.createElement("li");  
    const addIdType = TDarray.length+1; // TDarray의 object수 +1만큼 id할당
    const delBtn = document.createElement("button")
    delBtn.innerText = "❌";
    delBtn.classList.add("delBtn");
    delBtn.classList.add("none");
    delBtn.addEventListener('click' , deletelist)
    
    
    const span = document.createElement("span");
    span.style.cursor = "default";
    span.addEventListener('mouseover' , showdelBtn);
    span.addEventListener('mouseout' , nonedelBtn);
    
    span.innerText = t;
    li.id = addIdType;
    li.appendChild(delBtn);
    li.appendChild(span);
    todoList.appendChild(li);
    
    
    // 3-2. todolist를 array로 TDarray에 저장 후 save_LS함수 실행
    const TDAaddType = {
        text: t,
        id: addIdType,
    };
    TDarray.push(TDAaddType); // TDarray에 TDAaddType의 형식으로 값저장
    save_LS(); //array type으로 저장한 todolist를 localStorage에 저장
};

function save_LS() {
    // 4. TDarray를 localStorage에 저장 
    localStorage.setItem(TD, JSON.stringify(TDarray)); 
    //TDarray를 localStorage에 string으로 저장
    
};

function showdelBtn(e){
    const t = e.target;
    const B = t.previousSibling;
    t.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
    B.classList.remove('none');
    B.addEventListener('mouseover' , showdelBtn_2);

};

function showdelBtn_2(e) {
    const B = e.target;
    const t = B.nextSibling;
    B.classList.remove('none');
    t.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
};

function nonedelBtn(e) {
    const t = e.target;
    const B = t.previousSibling;
    t.style.backgroundColor = "";
    B.classList.add('none');
    B.addEventListener('mouseout' , nonedelBtn_2);
};

function nonedelBtn_2(e) {
    const B = e.target;
    const t = B. nextSibling;
    B.classList.add('none');
    t.style.backgroundColor = "";
};

function deletelist(event){
    const todos = localStorage.getItem(TD);
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const parsedTDarray = JSON.parse(todos);
    const cleanTodo = parsedTDarray.filter(parsedTDarray => parsedTDarray.id !== parseInt(li.id));
    console.log(cleanTodo);
    TDarray = cleanTodo;
    save_LS();
};




function init() {
    // 1. 사용자가 Todolist 작성후 엔터키를 누르면 handleSubmit함수 실행
    todoText.addEventListener('keyup', handleSubmit)
    // 1-1. localStorage에 저장되어 있는 Todolist 정보를 불러옴
    loadTodo();
};

init();