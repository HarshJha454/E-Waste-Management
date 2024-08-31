const questions = [
  {
    question: "What is E-waste?",
    options: [
      "Biodegradable waste",
      "Electronic waste",
      "Plastic waste",
      "Medical waste",
    ],
    correctAnswer: 1,
    explanation:
      "E-waste refers to discarded electronic devices and components.",
  },
  {
    question: "Which of the following is considered E-waste?",
    options: [
      "Old mobile phones",
      "Plastic bottles",
      "Glass jars",
      "Wooden furniture",
    ],
    correctAnswer: 0,
    explanation: "Old mobile phones are classified as E-waste.",
  },
  {
    question: "Why is E-waste harmful?",
    options: [
      "It decomposes easily",
      "It releases toxic substances",
      "It is non-toxic",
      "It is biodegradable",
    ],
    correctAnswer: 1,
    explanation: "E-waste can release toxic substances into the environment.",
  },
  {
    question: "How can E-waste be managed?",
    options: [
      "Burning it",
      "Recycling",
      "Burying it",
      "Throwing it in the sea",
    ],
    correctAnswer: 1,
    explanation: "Recycling is the best way to manage E-waste.",
  },
  {
    question: "Which organization deals with global E-waste issues?",
    options: ["World Bank", "UNEP", "WHO", "IMF"],
    correctAnswer: 1,
    explanation:
      "UNEP (United Nations Environment Programme) deals with E-waste issues globally.",
  },
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const explanationElement = document.getElementById("explanation");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => selectAnswer(index));
    optionsElement.appendChild(button);
  });
}

function selectAnswer(selectedIndex) {
  const correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;
  const explanation = questions[currentQuestionIndex].explanation;

  if (selectedIndex === correctAnswerIndex) {
    optionsElement.children[selectedIndex].classList.add("correct");
  } else {
    optionsElement.children[selectedIndex].classList.add("incorrect");
    optionsElement.children[correctAnswerIndex].classList.add("correct");
  }

  explanationElement.textContent = explanation;
  explanationElement.classList.remove("hidden");
  nextButton.classList.remove("hidden");
}

function resetState() {
  nextButton.classList.add("hidden");
  explanationElement.classList.add("hidden");
  optionsElement.innerHTML = "";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    alert("Quiz completed!");
  }
});

loadQuestion();
