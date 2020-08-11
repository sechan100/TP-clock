const clock = document.querySelector("h1")
const xm = document.querySelector("h2")


function time(){
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    xm.innerText = `${h > 12 ? "오후": "오전"}`
    clock.innerText = `${
        21 < h ? `${h-12}`:
        12 < h ? `0${h-12}`:
        h < 10 ? `0${h}`: h
    }:${m <10 ? `0${m}`:m
    }:${s <10 ? `0${s}`:s
    }`;
};

function Doingtime(){
    setInterval(time, 1000);
}
Doingtime()