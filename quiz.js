function checkAnswer() {
    var correctAnswer= "4";
    userAnswer= document.querySelector('input[name="quiz"]');
    if(userAnswer==correctAnswer) {
        document.getElementById('feedback').textContent= "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent= "That's incorrect. Try again!";
    }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);