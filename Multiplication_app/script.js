function generateQuestion() {
    const num1 = Math.ceil(Math.random() * 10);
    const num2 = Math.ceil(Math.random() * 10);
    const correctAns = num1 * num2;

    document.getElementById("question").innerText = `What is ${num1} multiplied by ${num2}?`;
    return correctAns;
}

const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

let score = 0;
let correctAns = generateQuestion();

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const userAns = parseInt(inputEl.value);
    if (!isNaN(userAns) && userAns === correctAns) {
        score = score + 1;
    } else {
        score = score - 1;
    }
    scoreEl.innerText = `Score: ${score}`;
    correctAns = generateQuestion();
    inputEl.value = ""; // Clear the input field for the next question
});