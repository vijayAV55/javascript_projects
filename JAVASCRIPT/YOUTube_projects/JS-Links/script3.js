const questions = [
    {
        questions: "which is the largest animal in the world?",
        answers: [
            { text: "shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        questions: "which is the best smallest country in the world?",
        answers: [
            { text: "Vatican city", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "shri Lanka", correct: false },
        ]
    },
    {
        questions: "which is the largest desert in the world?",
        answers: [
            { text: "kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "sahara", correct: false },
            { text: "Antarctica", correct: true },
        ]
    },
    {
        questions: "which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendchild(button);
    });
}
startQuiz();


