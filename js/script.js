const questions = [
  {
    question: "What is JavaScript?",
    options: ["Programming Language", "Browser", "Database", "OS"],
    answer: "Programming Language",
  },
  {
    question: "Which keyword declares a variable?",
    options: ["var", "int", "string", "float"],
    answer: "var",
  },
  {
    question: "Which symbol is for single-line comment?",
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: "//",
  },
  {
    question: "Which method prints output to console?",
    options: ["console.log()", "print()", "echo()", "write()"],
    answer: "console.log()",
  },
  {
    question: "Which data type is NOT in JavaScript?",
    options: ["String", "Number", "Boolean", "Character"],
    answer: "Character",
  },
  {
    question: "Which keyword is used to declare constant?",
    options: ["const", "let", "var", "static"],
    answer: "const",
  },
  {
    question: "Which operator is used for strict equality?",
    options: ["===", "==", "=", "!="],
    answer: "===",
  },
  {
    question: "Which loop runs at least once?",
    options: ["for", "while", "do...while", "foreach"],
    answer: "do...while",
  },
  {
    question: "Which function converts string to integer?",
    options: ["parseInt()", "parseFloat()", "Number()", "toString()"],
    answer: "parseInt()",
  },
  {
    question: "Which array method adds element at end?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
  },
  {
    question: "Which array method removes last element?",
    options: ["pop()", "push()", "slice()", "splice()"],
    answer: "pop()",
  },
  {
    question: "What does NaN mean?",
    options: ["Not a Number", "No any Number", "New Number", "Negative Number"],
    answer: "Not a Number",
  },
  {
    question: "Which keyword is used for condition?",
    options: ["if", "for", "loop", "case"],
    answer: "if",
  },
  {
    question: "Which method joins array elements?",
    options: ["join()", "concat()", "merge()", "combine()"],
    answer: "join()",
  },
  {
    question: "Which keyword defines a function?",
    options: ["function", "def", "method", "fun"],
    answer: "function",
  },
  {
    question: "Which object works with dates?",
    options: ["Date", "Time", "Clock", "Calendar"],
    answer: "Date",
  },
  {
    question: "Which event occurs on button click?",
    options: ["onclick", "onload", "onhover", "onchange"],
    answer: "onclick",
  },
  {
    question: "Which method converts JSON to object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
    answer: "JSON.parse()",
  },
  {
    question: "Which method converts object to JSON?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "JSON.convert()"],
    answer: "JSON.stringify()",
  },
  {
    question: "Which statement stops a loop?",
    options: ["break", "stop", "exit", "return"],
    answer: "break",
  },
  {
    question: "Which method removes first array element?",
    options: ["shift()", "pop()", "slice()", "splice()"],
    answer: "shift()",
  },
  {
    question: "Which method selects element by ID?",
    options: ["getElementById()", "getElementsByClass()", "querySelectorAll()", "selectById()"],
    answer: "getElementById()",
  },
  {
    question: "Which keyword handles errors?",
    options: ["try", "catch", "throw", "All of these"],
    answer: "All of these",
  },
  {
    question: "Which symbol is used for NOT equal?",
    options: ["!=", "==", "=", "<>"],
    answer: "!=",
  },
  {
    question: "Which method repeats a string?",
    options: ["repeat()", "loop()", "copy()", "again()"],
    answer: "repeat()",
  },
  {
    question: "Which keyword creates a class?",
    options: ["class", "object", "function", "struct"],
    answer: "class",
  },
  {
    question: "Which function runs on page load?",
    options: ["onload", "onclick", "onstart", "init"],
    answer: "onload",
  },
  {
    question: "Which property gives array length?",
    options: ["length", "size()", "count()", "total()"],
    answer: "length",
  },
  {
    question: "Which keyword exports module?",
    options: ["export", "import", "require", "module"],
    answer: "export",
  },
  {
    question: "Which keyword imports module?",
    options: ["import", "export", "require", "include"],
    answer: "import",
  },
];

let currentIndex = 0;
let userAnswers = {};

const questionList = document.getElementById("questionList");
const questionText = document.getElementById("questionText");
const questionCount = document.getElementById("questionCount");
const optionBox = document.getElementById("optionBox");
const progressBox = document.getElementById("progressBox");

document.getElementById("nextBtn").onclick = nextQuestion;
document.getElementById("prevBtn").onclick = prevQuestion;

init();

function init() {
  renderQuestionList();
  renderProgress();
  loadQuestion();
}

function renderQuestionList() {
  questionList.innerHTML = "";
  questions.forEach((_, i) => {
    const li = document.createElement("li");
    li.className = "list-group-item question-item";
    li.innerText = `Question ${i + 1}`;
    li.onclick = () => {
      currentIndex = i;
      loadQuestion();
    };
    questionList.appendChild(li);
  });
}

function renderProgress() {
  progressBox.innerHTML = "";
  questions.forEach((_, i) => {
    const span = document.createElement("span");
    span.className = "question-circle";
    span.innerText = i + 1;
    span.onclick = () => {
      currentIndex = i;
      loadQuestion();
    };
    progressBox.appendChild(span);
  });
}

function loadQuestion() {
  const q = questions[currentIndex];
  questionCount.innerText = `Question ${currentIndex + 1} of ${questions.length}`;
  questionText.innerText = q.question;
  optionBox.innerHTML = "";

  q.options.forEach(opt => {
    const label = document.createElement("label");
    label.className = "list-group-item";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "option";
    radio.className = "form-check-input me-2";
    radio.checked = userAnswers[currentIndex] === opt;

    radio.onchange = () => {
      userAnswers[currentIndex] = opt;
      markAnswered();
    };

    label.append(radio, opt);
    optionBox.appendChild(label);
  });

  updateActiveState();
}

function updateActiveState() {
  document.querySelectorAll(".question-item").forEach((el, i) =>
    el.classList.toggle("active", i === currentIndex)
  );

  document.querySelectorAll(".question-circle").forEach((el, i) =>
    el.classList.toggle("active", i === currentIndex)
  );
}

function markAnswered() {
  document.querySelectorAll(".question-circle")[currentIndex]
    .classList.add("answered");
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion();
  }
}

document.getElementById("submitBtn").onclick = submitQuiz;


function submitQuiz() {
  let score = 0;

  questions.forEach((q, index) => {
    if (userAnswers[index] === q.answer) {
      score++;
    }
  });

  showResult(score);
}
let minutes = 45;
let seconds = 0;

setInterval(function () {

  if (seconds === 0) {
    if (minutes === 0) {
      alert("Time Over!");
      submitQuiz();   
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  document.getElementById("timer").innerText =
    minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

}, 1000);


function showResult(score) {
  document.querySelector(".quiz-card").innerHTML = `
    <div class="card-body text-center">
      <h2>Result</h2>
      <p>Total Questions: ${questions.length}</p>
      <p>Your Score: ${score}</p>
    </div>
  `;
}

