let questions = [
    {
        q: "Which planet do we live on?",
        options: ["Mars", "Earth", "Jupiter", "Venus"],
        answer: 1
    },
    {
        q: "What color is the sky?",
        options: ["Green", "Blue", "Red", "Yellow"],
        answer: 1
    },
    {
        q: "2 + 3 = ?",
        options: ["4", "5", "6", "7"],
        answer: 1
    },
    {
        q: "Which animal says 'Meow'?",
        options: ["Dog", "Cat", "Cow", "Lion"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {

    let q = questions[currentQuestion];

    document.getElementById("question").innerText = q.q;

    document.getElementById("opt0").innerText = q.options[0];
    document.getElementById("opt1").innerText = q.options[1];
    document.getElementById("opt2").innerText = q.options[2];
    document.getElementById("opt3").innerText = q.options[3];
}

function checkAnswer(option) {

    if (option == questions[currentQuestion].answer) {
        score++;
        alert("Correct Answer! 🎉");
    }
    else {
        alert("Wrong Answer ❌");
    }

    document.getElementById("score").innerText = score;

}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {
        alert("Game Finished! Your Score: " + score);
        currentQuestion = 0;
        score = 0;
    }

    loadQuestion();

}

loadQuestion();