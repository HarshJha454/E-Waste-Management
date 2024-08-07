const questions = [
    {
        question: "What is e-waste?",
        answers: [
            { text: "Electronic waste", correct: true, explanation: "E-waste refers to discarded electronic devices and components." },
            { text: "Everyday waste", correct: false, explanation: "Everyday waste is a general term and not specific to electronics." },
            { text: "Environmental waste", correct: false, explanation: "Environmental waste is not a specific category of waste." },
            { text: "Economic waste", correct: false, explanation: "Economic waste is not related to electronic devices." }
        ]
    },
    {
        question: "Which of these is considered e-waste?",
        answers: [
            { text: "Old smartphones", correct: true, explanation: "Old smartphones are considered e-waste because they are electronic devices." },
            { text: "Used batteries", correct: true, explanation: "Used batteries are also considered e-waste due to their electronic components." },
            { text: "Plastic bottles", correct: false, explanation: "Plastic bottles are not considered e-waste as they are not electronic." },
            { text: "Cardboard boxes", correct: false, explanation: "Cardboard boxes are not considered e-waste." }
        ]
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const explanationElement = document.getElementById('explanation'); // Add this element to display explanations

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    explanationElement.classList.add('hide'); // Hide explanation initially
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    explanationElement.innerText = ''; // Clear previous explanation
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.dataset.explanation = answer.explanation; // Add explanation to button
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    const explanation = selectedButton.dataset.explanation; // Get explanation
    setStatusClass(selectedButton, correct);
    explanationElement.innerText = explanation; // Show explanation
    explanationElement.classList.remove('hide'); // Show explanation element
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        nextButton.innerText = 'Restart';
        nextButton.classList.remove('hide');
    }
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

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        startQuiz();
    }
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        startQuiz();
    }
});

startQuiz();
