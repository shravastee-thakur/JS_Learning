const incerase = document.querySelector(".lbtn");
const decrease = document.querySelector(".rbtn");
const number = document.querySelector(".num");
const reset = document.querySelector(".rst");

let score = 0;

incerase.addEventListener("click", ()=>{
    score = score + 1;
    if (score < 0){
        return;
    }
    number.textContent = score;
})

decrease.addEventListener("click", ()=>{
    score = score - 1;
    
    if (score < 0){
        return;
    }
    number.textContent = score;
})

reset.addEventListener("click", ()=>{
    score = 0;
    number.textContent = 0;
})