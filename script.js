document.addEventListener('DOMContentLoaded', (event) => {
    const changeColorButton = document.getElementById('changeColorButton');
    changeColorButton.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const questions = [
    {
        question: "What is e-waste?",
        answers: [
            { text: "Electronic waste", correct: true },
            { text: "Energy waste", correct: false },
            { text: "Environmental waste", correct: false },
            { text: "Economic waste", correct: false }
        ]
    },
    {
        question: "Which of the following is considered e-waste?",
        answers: [
            { text: "Old mobile phones", correct: true },
            { text: "Plastic bottles", correct: false },
            { text: "Paper waste", correct: false },
            { text: "Food scraps", correct: false }
        ]
    },
    {
        question: "Why is e-waste management important?",
        answers: [
            { text: "To save space in landfills", correct: false },
            { text: "To recover valuable materials", correct: true },
            { text: "To prevent air pollution", correct: false },
            { text: "To reduce noise pollution", correct: false }
        ]
    },
    {
        question: "Which component in e-waste is hazardous?",
        answers: [
            { text: "Copper", correct: false },
            { text: "Lead", correct: true },
            { text: "Aluminum", correct: false },
            { text: "Plastic", correct: false }
        ]
    },
    {
        question: "What can be done to manage e-waste?",
        answers: [
            { text: "Throw it in regular trash", correct: false },
            { text: "Recycle or refurbish", correct: true },
            { text: "Burn it", correct: false },
            { text: "Store it at home", correct: false }
        ]
    },
    {
        question: "Which of the following is a benefit of e-waste recycling?",
        answers: [
            { text: "Increases landfill space", correct: false },
            { text: "Reduces greenhouse gases", correct: true },
            { text: "Increases energy consumption", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "How can individuals help reduce e-waste?",
        answers: [
            { text: "Buy new gadgets frequently", correct: false },
            { text: "Repair and reuse old electronics", correct: true },
            { text: "Store old electronics at home", correct: false },
            { text: "Ignore the problem", correct: false }
        ]
    },
    {
        question: "What does the '3R' principle in e-waste management stand for?",
        answers: [
            { text: "Reduce, Reuse, Recycle", correct: true },
            { text: "Reuse, Recycle, Refurbish", correct: false },
            { text: "Recycle, Reduce, Remove", correct: false },
            { text: "Reduce, Remove, Recycle", correct: false }
        ]
    },
    {
        question: "Which agency often regulates e-waste?",
        answers: [
            { text: "Environmental Protection Agency (EPA)", correct: true },
            { text: "Food and Drug Administration (FDA)", correct: false },
            { text: "Federal Communications Commission (FCC)", correct: false },
            { text: "Securities and Exchange Commission (SEC)", correct: false }
        ]
    },
    {
        question: "What should you do before recycling a computer?",
        answers: [
            { text: "Throw it in the trash", correct: false },
            { text: "Remove and destroy personal data", correct: true },
            { text: "Burn it to destroy data", correct: false },
            { text: "Give it to a friend", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    resetState();
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    setStatusClass(selectedButton, correct);
    if (correct) {
        score++;
    } else {
        showCorrectAnswer();
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        button.removeEventListener('click', selectAnswer);
        setStatusClass(button, button.dataset.correct === 'true');
    });
    nextButton.classList.remove('hide');
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showCorrectAnswer() {
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        alert(`Quiz completed! Your score is ${score}/${questions.length}`);
        startQuiz();
    }
}

nextButton.addEventListener('click', nextQuestion);

startQuiz();
