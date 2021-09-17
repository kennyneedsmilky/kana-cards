/* ケンミル */ /* 神様最高 */ "use strict";

/* DOM */

// Quiz Question
const curQQuestionNowLabel = document.querySelector(".cur-quiz-question__now-label");
const curQQuestionMaxLabel = document.querySelector(".cur-quiz-question__max-label");
const curQQuestionScoreLabel = document.querySelector(".cur-quiz-question__score-label");
// Kana Ball
const kanaBall = document.querySelector(".kana-ball");
const kanaBallLabel = document.querySelector(".kana-ball__label");
// Answer Ball Area
const answerBallArea = document.querySelector(".answer-ball-area");
// Answer Balls
const answerBalls = document.querySelectorAll(".answer-ball");
const answerBallLabels = document.querySelectorAll(".answer-ball__label");
// Current Quiz Var
let curQuestionNow = 0;
let curQuestionMax = 0;
let curScore = 100;
let curQuizList = [];
let curQuizSet = "";

/* Event Handlers */

// Answer Ball Area
answerBallArea.addEventListener("click", e => {
    if (e.target.classList.contains("answer-ball")) {
        checkAnswer(e.target.innerText);
    }
});

/* Functions */

// Open Quiz
function openQuiz(quizID) {
    // Reset Values
    curQuestionNow = 0;
    curQuestionMax = 0;
    curScore = 0;
    curQuizList = [];
    curQuizSet = "";
    // Reset the Kana Ball.
    kanaBall.classList.remove("shadow-drop-2-center");
    kanaBall.classList.remove("vibrate-1");
    const kanaBallNum = Math.floor(Math.random() * 3);
    // Add an effect based on a random number.
    if( kanaBallNum === 1) {
        kanaBall.classList.add("shadow-drop-2-center");
    } else {
        kanaBall.classList.add("vibrate-1");
    }
    // ID set check
    checkID(quizID);
    // Use the quizID to get the object and shuffle quiz.
    const quizObj = quizList.filter(x => x._id === quizID)[0].kanaInQuiz;
    // Shuffle the Quiz
    const quizObjshuffled = quizObj.sort(() => Math.random() - 0.5);
    // Update Current Quiz List
    updateCurQuizList(quizObjshuffled);
}

// Update Current Quiz List
function updateCurQuizList (shuffledObj) {
    // Get shuffledQuizObj and get the items from the kanalist.
    shuffledObj.forEach(item => {
        const result = kanaList.filter(x => x.hiragana === item || x.katakana === item)[0];
        curQuizList.push(result);
    })
    // Update curQuestionMax
    curQuestionMax = curQuizList.length;
    curScore = curQuestionMax;
    curQQuestionMaxLabel.textContent = curQuestionMax;
    // Update Question
    updateQuestion();
}

// Update Question
function updateQuestion () {
    // Reset the answerballs
    answerBalls.forEach(answerBall => {
        answerBall.classList.remove("right");
        answerBall.classList.remove("wrong");
        answerBall.disabled = false;
    })
    // Reset the answerBallLabels.
    answerBallLabels.forEach(answerBallLabel => answerBallLabel.textContent = "");
    curQQuestionNowLabel.textContent = curQuestionNow + 1;
    // Reset the kanaBall;
    curQQuestionScoreLabel.textContent = ((curScore / curQuestionMax) * 100).toFixed(2);
    kanaBall.classList.remove("right");
    kanaBall.classList.remove("wrong");
    kanaBall.disabled = false;
    // Make a random number for the right answer choice in the selection.
    const randomNum = Math.ceil(Math.random() * 3);
    const answersBank = [];

    if (curQuizSet === "h") { // Check via hiragana.
        // Set the question in the kana ball. 
        kanaBall.textContent = curQuizList[curQuestionNow].hiragana;
        // Attach the right answer in the kana ball.
        kanaBall.setAttribute("data-answer", curQuizList[curQuestionNow]._id);

        // Set the right answer in a random answerball.
        answerBallLabels[randomNum - 1].textContent = curQuizList[curQuestionNow]._id;
        // Set data in the answersBank.
        answersBank.push(curQuizList[curQuestionNow]._id);
        // console.log(`${answersBank[0]} is the answer.`);
        // Loop to see if any empty answers
        for (let i = 0; i < answerBallLabels.length; i++) {
            const anotherRandomNumber = Math.ceil(Math.random() * curQuizList.length);
            const wrongAnswer = curQuizList[anotherRandomNumber - 1]._id;
            // Get out of the loop and continue if the answerBallLabel isn't blank.
            if (answerBallLabels[i].textContent !== "") continue;
            // Check to see if the answer already is in the answersBank;
            const results = answersBank.filter(x => x === wrongAnswer);
            if (results.length > 0) {
                i -= 1;
                continue;
            }
            // Add the wrong answer if all conditions are met.
            answerBallLabels[i].textContent = wrongAnswer;
            answersBank.push(wrongAnswer);
        }
        // console.log(JSON.stringify(answersBank));
    } else { // Check via katakana.
        // Set the question in the kana ball. 
        kanaBall.textContent = curQuizList[curQuestionNow].katakana;
        // Attach the right answer in the kana ball.
        kanaBall.setAttribute("data-answer", curQuizList[curQuestionNow]._id);
        // Set the right answer in a random answerball.
        answerBallLabels[randomNum - 1].textContent = curQuizList[curQuestionNow]._id;
        // Set data in the answersBank.
        answersBank.push(curQuizList[curQuestionNow]._id);
        // console.log(`${answersBank[0]} is the answer.`);
        // Loop to see if any empty answers
        for (let i = 0; i < answerBallLabels.length; i++) {
            const anotherRandomNumber = Math.ceil(Math.random() * curQuizList.length);
            const wrongAnswer = curQuizList[anotherRandomNumber - 1]._id;
            // Get out of the loop and continue if the answerBallLabel isn't blank.
            if (answerBallLabels[i].textContent !== "") continue;
            // Check to see if the answer already is in the answersBank;
            const results = answersBank.filter(x => x === wrongAnswer);
            if (results.length > 0) {
                i -= 1;
                continue;
            }
            // Add the wrong answer if all conditions are met.
            answerBallLabels[i].textContent = wrongAnswer;
            answersBank.push(wrongAnswer);
        }
        // console.log(JSON.stringify(answersBank));
    }

}

// Check ID
function checkID(quizID) {
    // Set quizSet with quizID
    const iDSetCheck = quizID.split("")[0];
    if (iDSetCheck === "h") {
        curQuizSet = "h";
    } else {
        curQuizSet = "k";
    }
}

// Check Answer
function checkAnswer(answer) {
    // Compare to the right answer
    if (answer === kanaBall.getAttribute("data-answer")) {
        kanaBall.classList.add("right");
    } else {
        kanaBall.classList.add("wrong");
        curScore -= 1;
    }
    // Show right and wrong answers;
    answerBalls.forEach(answerBall => {
        if (answerBall.innerText === kanaBall.getAttribute("data-answer")) {
            answerBall.disabled = true;
            answerBall.classList.add("right");
            if (curQuizSet === "h") {
                // Find the index of the answer in the userKanaList
                const tester = userKanaList.findIndex((x, index) => {
                    return x._id === answer;
                });
                userKanaList[tester].hiraganaMastery += 1;
                localStorage.setItem("userKanaList", JSON.stringify(userKanaList));
            } else {
                // Find the index of the answer in the userKanaList
                const tester = userKanaList.findIndex((x, index) => {
                    return x._id === answer;
                });
                userKanaList[tester].katakanaMastery += 1;
                localStorage.setItem("userKanaList", JSON.stringify(userKanaList));
            }
        } else {
            answerBall.disabled = true;
            answerBall.classList.add("wrong");
        }
    })

    curQuestionNow += 1;

    if (curQuestionNow + 1 <= curQuestionMax) {
        // Update the question after 3 seconds.
        setTimeout(() => {
            updateQuestion();
        }, 1500);
    } else {
        curQQuestionScoreLabel.textContent = ((curScore / curQuestionMax) * 100).toFixed(2);
        setTimeout(() => {
            menu.classList.remove("hidden");
        }, 1500);
    }
}