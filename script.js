const questions = [
    "1. How do you take care of yourself?",
    "2. What does success mean to you ?",
    "3. What’s the one piece of advice you would give to your younger self ?",
    "4. What do you spend most of your time thinking about, and how does it make you feel ?",
    "5. How do you feel when things don’t go as planned ?",
    "6. When was the last time you felt truly happy, and what were you doing ?",
    "7. What would you do right now if nothing, including yourself, was holding you back?",
    "8. What’s one thing you could do today to step out of your comfort zone?",
    "9. What was a tough time in your life, and how did you get through it?",
    "10. If you could live anywhere in the world, where would it be and why?"
];

let currentQuestionIndex = 0;

function updateQuestion() {
    questionNumber.innerHTML = `<span>${currentQuestionIndex + 1}.</span> ${questions[currentQuestionIndex]}`;
    answerInput.value = "";
    updateProgressBar();
  }  

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
  }