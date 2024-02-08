const questions = [
    {
        question: "Traduire «Les chimie»",
        answers: [
            { text: "פיזיקה", correct: false },
            { text: "אין תשובה נכונה", correct: true },
            { text: "ביולוגיה", correct: false },
            { text: "היסטוריה", correct: false },
        ]    
    },
    {
        question: "Tu  ___ un piano",
        answers: [
            { text: "as", correct: true },
            { text: "a", correct: false },
            { text: "es", correct: false },
            { text: "est", correct: false },
        ]
    },
    {
        question: "Traduire «les pastèques»",
        answers: [
            { text: "סטייק", correct: false },
            { text: "פסטרמה", correct: false },
            { text: "נקניק", correct: false },
            { text: "אבטיח", correct: true },
        ]
    },
    {
        question: "Traduire «Je suis content(e)»",
        answers: [
            { text: "אני שמח", correct: true },
            { text: "אתה עצוב", correct: false },
            { text: "אני עצוב", correct: false },
            { text: "אתם עייפים", correct: false },
        ]
    },
    {
        question: "Traduire «Tu es fatigué/fatiguée»",
        answers: [
            { text: "אתה עצוב", correct: false },
            { text: "אתה לחוץ", correct: false },
            { text: "אתה עייף", correct: true },
            { text: "אתה שמח", correct: false },
        ]
    },
    {
        question: "Traduire «Ca va bien»:",
        answers: [
            { text: "שלומי טוב", correct: true },
            { text: "שלומי נהדר", correct: false },
            { text: "אתה מאושר", correct: false },
            { text: "שלומי רע", correct: false },
        ]
    },
    {
        question: "Qu'est-ce que tu _____ faire?",
        answers: [
            { text: "aime", correct: false },
            { text: "aimes", correct: true },
            { text: "jaime", correct: false },
            { text: "sônts", correct: false },
        ]
    },
    {
        question: "Parce que ___ (בגלל ש)",
        answers: [
            { text: "qui", correct: false },
            { text: "cest", correct: true },
            { text: "quet", correct: false },
            { text: "cout", correct: false },
        ]
    },
    {
        question: "Traduire «Lire des livres»",
        answers: [
            { text: "לקרוא עיתונים", correct: false },
            { text: "לקרוא חדשות", correct: false },
            { text: "לקרוא ספרים", correct: true },
            { text: "לקרוא מאמרים", correct: false },
        ]
    },
    {
        question: "Traduire «Jouer aux cartes»",
        answers: [
            { text: "לשחק שחמט", correct: false },
            { text: "לשחק בקלפים", correct: true },
            { text: "לשחק תופסת", correct: false },
            { text: "לשחק בקרטינג", correct: false },
        ]
    },
    {
        question: "Traduire «Écouter de la musique»",
        answers: [
            { text: "לשמוע מוזיקה", correct: true },
            { text: "לנגן", correct: false },
            { text: "לשיר שיר", correct: false },
            { text: "אני אוהב להקשיב למוזיקה", correct: false },
        ]
    },
    {
        question: "הפוך לרבים: «Tu es content:»",
        answers: [
            { text: "Vous êtes contents", correct: true },
            { text: "Tu es contents", correct: false },
            { text: "Ils sont content", correct: false },
            { text: "Je suis contents", correct: false },
        ]
    },
    {
        question: "Traduire «Surfer sur i`nternet»",
        answers: [
            { text: "גלישת סקי", correct: false },
            { text: "לגלוש באינטרנט", correct: true },
            { text: "להיות באינטרנט", correct: false },
            { text: "לגלוש בים", correct: false },
        ]
    },
    {
        question: "Traduire «Manger au restaurant»",
        answers: [
            { text: "לנהל מסעדה", correct: false },
            { text: "לאכול במסעדה", correct: true },
            { text: "להתלונן על המסעדה", correct: false },
            { text: "לדבר במסעדה", correct: false },
        ]
    },
    {
        question: "הפוך לרבים: «Je suis formidable:»",
        answers: [
            { text: "Vous êtes formidables", correct: false },
            { text: "Nous sommes formidables", correct: true },
            { text: "Vous êtes formidable", correct: false },
            { text: "Nous êtes formidables", correct: false },
        ]
    },
    {
        question: "הפוך ליחיד: «Vous êtes Israeliens:»",
        answers: [
            { text: "Il est Israelien", correct: false },
            { text: "Elle est Israelien", correct: false },
            { text: "Tu es Israelien", correct: true },
            { text: "Tu es Israeliens", correct: false },
        ]
    },
    {
        question: "הפוך ליחיד: «Ils sont chanteurs:»",
        answers: [
            { text: "Il est chanteur", correct: true },
            { text: "Elle est chanteur", correct: false },
            { text: "Nous sommes chanteur", correct: false },
            { text: "Ils sont chanteur", correct: false },
        ]
    },
    {
        question: "Traduire «Ils sont malades»",
        answers: [
            { text: "הם חולים", correct: true },
            { text: "הן חולות", correct: false },
            { text: "הוא חולה", correct: false },
            { text: "היא חולה", correct: false },
        ]
    },
    {
        question: "Traduire «Quelle est ton activité sportive préférée?»",
        answers: [
            { text: "מה התחביב האהוב עליך?", correct: false },
            { text: "מה הפעילות הספורטיבית המועדפת עליך?", correct: true },
            { text: "מה המקצוע המועדף עליך?", correct: false },
            { text: "מה הפעילות הספורטיבית האהובה עליך?", correct: false },
        ]
    },
    {
        question: "Quel est ton ___ préféré? (תחביב)",
        answers: [
            { text: "loisir", correct: true },
            { text: "activité sportive", correct: false },
            { text: "matière", correct: false },
            { text: "jous", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
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
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    const audio = new Audio();

    // Dynamically change the image based on correctness
    const spinnerImage = document.getElementById("spinnerImage");
    spinnerImage.src = isCorrect ? "happyDog.gif" : "sadDog.jpg";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        audio.src = "correct.wav";
    } else {
        selectedBtn.classList.add("incorrect");
        audio.src = "incorrect.wav";
    }

    audio.volume = 0.1;
    audio.play();

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}


function showScore() {
    resetState();
    const percentage = score * 5;
    let message;

    if (percentage >= 0 && percentage <= 10) {
        message = "(טניה מעיפה אותך מהכתה)";
    } else if (percentage > 10 && percentage < 20) {
        message = "(במועצות חושבים על להעיף אותך מהכתה)";
    } else if (percentage > 20 && percentage <= 30) {
        message = "(לקחו לך את המחשב)";
    } else if (percentage > 30 && percentage <= 40) {
        message = "(לא התכוננת - קבלת נכשל, אין מה לעשות)";
    } else if (percentage > 40 && percentage <= 55) {
        message = " (נכשלת בשאלון קל וקצר - אין לי מה להגיד) ";
    } else if (percentage === 56) {
        message = "(עברת אבל עדיין ירביצו לך עם הכפכף)";
    } else if (percentage >=56 && percentage <=65){
        message = "(לפחות עברת)"
    } else if (percentage >=65 && percentage <=75){
        message = "(טעון שיפור, אתה חייב ללמוד אחרת תיכשל)"
    } else if (percentage >=75 && percentage <=85){
        message = "(איך 75-85? הייתי בטוח שיהיה 100)"
    } else if (percentage >=85 && percentage <=95){
        message = "(לא 100 - נכשל)"
    } else if (percentage === 100){
        message = "(ידעתי שתקבל/י 100, כי אם לא היית עף ממופת)"
    }

    questionElement.innerHTML = `ענית על  ${score} מתוך ${questions.length} נכון! ${percentage}% `;
    questionElement.innerHTML += message;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    const spinner = document.getElementById("spinner");
    const main = document.getElementById("quiz");

    spinner.style.display = "block";
    main.style.display = "none";

    setTimeout(() => {
        spinner.style.display = "none";
        main.style.display = "none";
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
        main.style.opacity = "1";
        main.style.display = "block";
    }, 1000);
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();