/* ケンミル */ /* 神様最高 */ "use strict"; console.log(new Date);

/* DOM */
const startBtn = document.querySelector(".start-btn");
const pages = document.querySelectorAll(".page");
const menu = document.querySelector(".menu");
const menuBtns = document.querySelectorAll(".menu__btn");
const menuBtnMenu = document.querySelector(".menu__btn--menu");
const hiraganaMasteredLabel = document.querySelector(".hiragana-mastered-label");
const hiraganaMaxLabel = document.querySelector(".hiragana-max-label");
const katakanaMasteredLabel = document.querySelector(".katakana-mastered-label");
const katakanaMaxLabel = document.querySelector(".katakana-max-label");
const kanaMasteryBarItems = document.querySelectorAll(".kana-mastery__bar-item");
const kanaListLabel = document.querySelector(".kana-list-label");
const kanaSwitchBtns = document.querySelectorAll(".kana-switch__btn");
const kanaBoxes = document.querySelectorAll(".kana-box");
const deleteBtn = document.querySelector(".delete-btn");
const quizBox = document.querySelector(".quiz-box");
const hiraganaPart = document.querySelector(".hiragana-part");
const katakanaPart = document.querySelector(".katakana-part");
const modals = document.querySelectorAll(".modal");
const modalCloseBtns = document.querySelectorAll(".modal__close-btn");
const statusCheckBtns = document.querySelectorAll(".status-check-btn");
const notesArea = document.querySelector(".--notes");

// User Info
let userKanaList;
let hiraganaMastered = 0;
let hiraganaMax;
let katakanaMastered = 0;
let katakanaMax;

/* Event Listeners */

// Start Btn
startBtn.addEventListener("click", () => {
    renderPage("status");
    menu.classList.remove("hidden");
})

// Menu Btns
menuBtns.forEach(menuBtn => {
    menuBtn.addEventListener("click", e => {
        renderPage(e.target.getAttribute("data-target"));
    })
})

// Menu Btn Menu
menuBtnMenu.addEventListener("click", () => toggleMenu());

// Kana Switch Btns
kanaSwitchBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        renderUserKanaList();
        showKanaBox(e.target);
    })
})

// Kana Boxes
kanaBoxes.forEach(kanaBox => {
    kanaBox.addEventListener("click", e => {
        if(e.target.classList.contains("kana-card")) {
            playVoice(e.target.querySelector(".kana-card__reading-label").textContent);
        }
    });
})

// Quiz Box
quizBox.addEventListener("click", e => {
    openQuiz(e.target.getAttribute("data-quiz"))
    renderPage("current-quiz");
    menu.classList.add("hidden");
})

// Delete Btn
deleteBtn.addEventListener("click", () => deleteAllData());

// Modal Close Btn
modalCloseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        closeModals();
    })
})

// Status Check Buttons
statusCheckBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        openStatusModal(e.target.getAttribute("data-check-id"));
    })
})


/* Notes */
notesArea.addEventListener("click", e => {
    if (e.target.classList.contains("note")) {
        console.log(e.target.querySelector(".note__content"));
        e.target.querySelector(".note__content").classList.toggle("hidden");
        e.target.querySelector(".more-button").classList.toggle("active");
    }
})


// Start the app.
init();

/* Functions */

// Init
function init() {
    if (localStorage.getItem("deleteLog")) console.log(localStorage.getItem("deleteLog"));
    getUserKanaList(); // userKanaList saved to localStorage;
    renderUserKanaList(); // userKanaList rendered on the Learn page.
    renderQuizzes(); // quizList rendered on the Quiz page.
    renderUserKana(); // userKanaList is rendered on the status page. 
    countHiragana(); // Shows maxHiragana in status.
    countKatakana(); // Shows maxKatakana in status.
}

// Get User KanaList
function getUserKanaList() {
    if (localStorage.getItem("userKanaList")) {
        loadKanaList();
    } else {
        localStorage.setItem("userKanaList", JSON.stringify(kanaList));
        loadKanaList();
    }
}

// Load KanaList
function loadKanaList() {
    userKanaList = JSON.parse(localStorage.getItem("userKanaList"));
}

// Count Hiragana
function countHiragana() {
    const counter = userKanaList.filter(x => x.hasOwnProperty("hiragana") && x.hasOwnProperty("hiraganaMastery"));
    hiraganaMax = counter.length;
    hiraganaMaxLabel.textContent = hiraganaMax;
}

// Count Katakana
function countKatakana() {
    const counter = userKanaList.filter(x => x.hasOwnProperty("katakana") && x.hasOwnProperty("katakanaMastery"));
    katakanaMax = counter.length;
    katakanaMaxLabel.textContent = katakanaMax;
}

// Save Data
function saveData() {
    localStorage.setItem("userKanaList", userKanaList);
}

// Render Page
function renderPage (target) {
    // Hide all the pages
    pages.forEach(page => page.classList.add("hidden"));

    // Show the page if it matches the target.
    pages.forEach(page => {
        if (target === page.getAttribute("data-page")) {
            if (target === "status") renderUserKana();
            page.classList.remove("hidden");
        }
    })
}

// Render User Kana List
function renderUserKanaList() {
    // Erase Previous Render
    kanaBoxes[0].innerText = "";
    kanaBoxes[1].innerText = "";

    userKanaList.forEach(card => {
        // This will render all of the hiragana cards.
        if (card.hasOwnProperty("hiragana")) {
            if (card.hiragana !== "") {
                kanaBoxes[0].insertAdjacentHTML("beforeend",
                `
                <div class="kana-card">
                    <h4 class="kana-card__kana-label avoid-clicks">${card.hiragana}</h4>
                    <span class="kana-card__reading-label avoid-clicks">${card._id}</span>
                </div>
                `)
            } else {
                kanaBoxes[0].insertAdjacentHTML("beforeend",
                `
                <div class="kana-card--empty">
                    <h4 class="kana-card__kana-label avoid-clicks">${card.hiragana}</h4>
                    <span class="kana-card__reading-label avoid-clicks">${card._id}</span>
                </div>
                `)
            }
        }
        // This will render all of the katakana cards.
        if (card.hasOwnProperty("katakana")) {
            if (card.katakana !== "") {
                kanaBoxes[1].insertAdjacentHTML("beforeend",
                `
                <div class="kana-card">
                    <h4 class="kana-card__kana-label avoid-clicks">${card.katakana}</h4>
                    <span class="kana-card__reading-label avoid-clicks">${card._id}</span>
                </div>
                `)
            } else {
                kanaBoxes[1].insertAdjacentHTML("beforeend",
                `
                <div class="kana-card--empty">
                    <h4 class="kana-card__kana-label avoid-clicks">${card.katakana}</h4>
                    <span class="kana-card__reading-label avoid-clicks">${card._id}</span>
                </div>
                `)
            }
            
        }
    })
}

// Render User Kana
function renderUserKana() {
    // Reset values before a render.
    hiraganaMastered = 0;
    katakanaMastered = 0;
    hiraganaPart.innerHTML = "";
    katakanaPart.innerHTML = "";
    // Render all Hiragana
    userKanaList.forEach(kana => {
        if (kana.hasOwnProperty("hiragana") && kana.hiragana !== "") {
            const kanaEntry = `
            <div class="section-bubble">
                <div class="kana-square">
                    <div class="kana-square__item">
                        <h2 class="kana-square__kana">${kana.hiragana}</h2>
                    </div>
                    <div class="kana-square__item">
                        <div class="mastery__bar" style="--mastery: ${kana.hiraganaMastery}%"></div>
                    </div>
                </div>
            </div>
            `;
            // Insert this in the hiragana Part.
            hiraganaPart.insertAdjacentHTML("beforeend", kanaEntry);
        }
        if (kana.hiraganaMastery >= 100) {
            hiraganaMastered += 1;
        }
    })
    // Render all Katakana
    userKanaList.forEach(kana => {
        if (kana.hasOwnProperty("katakana") && kana.katakana !== "") {
            katakanaPart.insertAdjacentHTML("beforeend", 
            `
            <div class="section-bubble">
                <div class="kana-square">
                    <div class="kana-square__item">
                        <h2 class="kana-square__kana">${kana.katakana}</h2>
                    </div>
                    <div class="kana-square__item">
                        <div class="mastery__bar" style="--mastery: ${kana.katakanaMastery}%"></div>
                    </div>
                </div>
            </div>
            `)
        }
        if (kana.katakanaMastery >= 100) {
            katakanaMastered += 1;
        }
    })
    hiraganaMasteredLabel.textContent = hiraganaMastered;
    katakanaMasteredLabel.textContent = katakanaMastered;
}

// Show Kana Box
function showKanaBox(kanaBoxBtn) {
    // Get the first letter to be a capital.
    const upperCaseFirstLetter = kanaBoxBtn.getAttribute("data-target")[0].toUpperCase() + kanaBoxBtn.getAttribute("data-target").split("").splice(1).join("");
    kanaListLabel.innerText = `${upperCaseFirstLetter} List`;
    // Remove active classes from all the buttons.
    kanaSwitchBtns.forEach(btn => {
        btn.classList.remove("active");
        if (kanaBoxBtn.classList.add("active"));
    })
    // Add the active class to the button that matches the kanaBoxBtn.
    kanaBoxes.forEach(box => {
        box.classList.add("hidden");
        if (kanaBoxBtn.getAttribute("data-target") === box.getAttribute("data-box-id")) {
            box.classList.remove("hidden");
        }
    })
}

// Delete All Data
function deleteAllData() {
    localStorage.clear();
    localStorage.setItem("deleteLog", `さっかり削除されました！ ${Date()}`);
    location.reload();
}

// Render Quizzes
function renderQuizzes() {
    quizBox.textContent = "";
    // Get the info from the quizList
    quizList.forEach(quiz => {
        quizBox.insertAdjacentHTML("beforeend", 
        `
        <div class="section-bubble" data-quiz="${quiz._id}">
            <h2 class="avoid-clicks">${quiz.name}</h2>
            <div class="quiz-info avoid-clicks">
                <h4>Kana in this quiz:</h4>
                <p class="quiz-info__label">${quiz.kanaInQuiz}</p>
            </div>
        </div>
        `
        )
    })
}

// Play voice
function playVoice(voice) {
    const sound = new Audio(`assets/audio/${voice}.mp3`);
    sound.play();
}

// Toggle Menu
function toggleMenu() {
    menu.classList.toggle("active");
}

// Open
function openStatusModal(checkId) {
    modals.forEach(modal => {
        if(modal.getAttribute("data-check-id") === checkId) {
            modal.classList.remove("hidden");
        }
    })
}

// CLose Modals
function closeModals() {
    modals.forEach(modal => {
        modal.classList.add("hidden");
    })
}