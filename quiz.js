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
    {
        question: "Why is proper disposal of e-waste important?",
        answers: [
            { text: "To reduce environmental pollution", correct: true, explanation: "E-waste can contain hazardous materials that harm the environment if not disposed of properly." },
            { text: "To increase landfill size", correct: false, explanation: "Increasing landfill size is not a goal of e-waste disposal." },
            { text: "To create more jobs", correct: false, explanation: "While jobs may be created in e-waste management, this is not the primary reason for proper disposal." },
            { text: "To decrease the cost of new electronics", correct: false, explanation: "Proper disposal does not directly decrease the cost of new electronics." }
        ]
    },
    {
        question: "What should you do with old electronics?",
        answers: [
            { text: "Donate them if still functional", correct: true, explanation: "Donating old electronics helps reuse resources and reduces e-waste." },
            { text: "Throw them in the trash", correct: false, explanation: "Throwing electronics in the trash can lead to environmental harm." },
            { text: "Store them indefinitely", correct: false, explanation: "Storing old electronics indefinitely does not address the e-waste problem." },
            { text: "Burn them to get rid of them", correct: false, explanation: "Burning electronics releases harmful toxins and is dangerous." }
        ]
    },
    {
        question: "How can you reduce e-waste?",
        answers: [
            { text: "Buy fewer electronics", correct: true, explanation: "Purchasing only what you need can help reduce e-waste." },
            { text: "Use disposable electronics", correct: false, explanation: "Using disposable electronics increases e-waste." },
            { text: "Avoid recycling", correct: false, explanation: "Recycling is key to reducing e-waste." },
            { text: "Ignore old devices", correct: false, explanation: "Ignoring old devices does not solve the e-waste issue." }
        ]
    }
    // Add more questions as needed
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const explanationElement = document.getElementById('explanation');

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    explanationElement.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    explanationElement.innerText = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.dataset.explanation = answer.explanation;
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    const explanation = selectedButton.dataset.explanation;
    setStatusClass(selectedButton, correct);
    explanationElement.innerText = explanation;
    explanationElement.classList.remove('hide');
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
        element.classList.add('incorrect');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
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
