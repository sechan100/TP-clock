const clock = document.querySelector("h1")
const xm = document.querySelector("h2")

function time(){
    const date = new Date();
    const h = date.getHours;
    const m = date.getMinutes;
    const s = date.getSeconds;
    clock.innerHTML = `${h}:${m}:${s}`
}

function Doingtime(){
    setInterval(time, 1000);
}
Doingtime()