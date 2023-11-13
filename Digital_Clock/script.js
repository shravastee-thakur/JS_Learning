const hourEl = document.getElementById("hours");
const minuterEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
const amEl = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }

    hourEl.innerText = h;
    minuterEl.innerText = m;
    secEl.innerText = s;
    amEl.innerText = ampm;
    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock()