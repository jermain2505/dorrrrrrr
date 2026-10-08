/* =========================================
   NEMBAK CEWEK GAME
========================================= */


// ================================
// GAME DATA
// ================================

const story = [

    {
        chapter: "Chapter 01",
        title: "First Conversation",

        speaker: "Dia",

        text:
            "Eh, kamu akhir-akhir ini sering banget ngajak ngobrol aku. Ada sesuatu ya? 👀",

        choices: [

            {
                text: "Nggak kok, cuma nyaman ngobrol sama kamu 😌",
                points: 10,
                response:
                    "Oh... nyaman ya? Hehe. Aku juga sebenarnya nyaman ngobrol sama kamu."
            },

            {
                text: "Aku lagi gabut aja 😭",
                points: 3,
                response:
                    "Yah... kirain ada sesuatu. 😭"
            },

            {
                text: "Rahasia dong 🤫",
                points: 7,
                response:
                    "Ih apaan sih... malah bikin penasaran."
            }

        ]
    },


    {
        chapter: "Chapter 02",
        title: "Getting Closer",

        speaker: "Dia",

        text:
            "Kalau misalnya aku ngajak kamu jalan berdua, kamu mau nggak?",

        choices: [

            {
                text: "Mau lah. Kapan? 😳",
                points: 10,
                response:
                    "Cepet banget jawabnya... 😂"
            },

            {
                text: "Tergantung traktirannya.",
                points: 6,
                response:
                    "WKWK ternyata begitu caranya."
            },

            {
                text: "Kayaknya seru.",
                points: 8,
                response:
                    "Oke... nanti kita cari waktu ya."
            }

        ]
    },


    {
        chapter: "Chapter 03",
        title: "A Little Hint",

        speaker: "Dia",

        text:
            "Menurut kamu... aku ini orang yang menyenangkan nggak?",

        choices: [

            {
                text: "Banget. Makanya aku suka ngobrol sama kamu.",
                points: 10,
                response:
                    "Kok kamu ngomongnya gitu sih... 😳"
            },

            {
                text: "Lumayan lah.",
                points: 5,
                response:
                    "LUMAYAN?! Jahat banget 😭"
            },

            {
                text: "Kamu mau aku jawab jujur?",
                points: 8,
                response:
                    "Iya... jawab aja."
            }

        ]
    },


    {
        chapter: "Chapter 04",
        title: "The Question",

        speaker: "Dia",

        text:
            "Kalau kamu suka sama seseorang... biasanya kamu bakal bilang langsung?",

        choices: [

            {
                text: "Kalau orangnya tepat, mungkin iya.",
                points: 10,
                response:
                    "Hmm... berarti sekarang ada seseorang?"
            },

            {
                text: "Aku orangnya pemalu 😭",
                points: 6,
                response:
                    "Padahal kelihatannya nggak pemalu."
            },

            {
                text: "Kenapa kamu nanya begitu?",
                points: 8,
                response:
                    "Nggak tahu... cuma penasaran aja."
            }

        ]
    },


    {
        chapter: "Chapter 05",
        title: "Almost There",

        speaker: "Dia",

        text:
            "Jujur ya... akhir-akhir ini aku juga senang kalau ada notif dari kamu. ❤️",

        choices: [

            {
                text: "Berarti kita sama-sama senang dong.",
                points: 10,
                response:
                    "Mungkin... iya. ❤️"
            },

            {
                text: "Wah, berarti aku penting dong.",
                points: 7,
                response:
                    "Jangan geer dulu 😭"
            },

            {
                text: "Aku juga selalu senyum kalau lihat notif kamu.",
                points: 10,
                response:
                    "Aduh... jangan bikin aku salting."
            }

        ]
    },


    {
        chapter: "Chapter 06",
        title: "The Moment",

        speaker: "Dia",

        text:
            "Aku ngerasa akhir-akhir ini kita semakin dekat ya.",

        choices: [

            {
                text: "Aku juga ngerasa begitu.",
                points: 10,
                response:
                    "Aku senang dengarnya."
            },

            {
                text: "Masa sih?",
                points: 5,
                response:
                    "Ih pura-pura nggak tahu."
            },

            {
                text: "Mungkin karena aku memang ingin dekat sama kamu.",
                points: 10,
                response:
                    "..." 
            }

        ]
    }

];


// ================================
// GAME VARIABLES
// ================================

let currentStory = 0;

let lovePoint = 0;

let maxLove = story.length * 10;

let selectedChoice = false;


// ================================
// DOM ELEMENTS
// ================================

const startScreen =
    document.getElementById("startScreen");

const gameScreen =
    document.getElementById("gameScreen");

const confessionScreen =
    document.getElementById("confessionScreen");

const endingScreen =
    document.getElementById("endingScreen");


const startBtn =
    document.getElementById("startBtn");

const continueBtn =
    document.getElementById("continueBtn");

const acceptBtn =
    document.getElementById("acceptBtn");

const timeBtn =
    document.getElementById("timeBtn");

const restartBtn =
    document.getElementById("restartBtn");


const chapter =
    document.getElementById("chapter");

const chapterTitle =
    document.getElementById("chapterTitle");

const speaker =
    document.getElementById("speaker");

const dialogueText =
    document.getElementById("dialogueText");

const choices =
    document.getElementById("choices");


const lovePointDisplay =
    document.getElementById("lovePoint");

const lovePercent =
    document.getElementById("lovePercent");

const meterFill =
    document.getElementById("meterFill");


const finalLove =
    document.getElementById("finalLove");


// ================================
// START GAME
// ================================

startBtn.addEventListener("click", () => {

    currentStory = 0;

    lovePoint = 0;

    updateLoveMeter();

    showScreen(gameScreen);

    loadStory();

});


// ================================
// LOAD STORY
// ================================

function loadStory() {

    selectedChoice = false;

    continueBtn.classList.add("hidden");

    choices.innerHTML = "";

    const current = story[currentStory];


    chapter.textContent =
        current.chapter;


    chapterTitle.textContent =
        current.title;


    speaker.textContent =
        current.speaker;


    typeText(
        current.text
    );


    current.choices.forEach(
        (choice, index) => {

            const button =
                document.createElement("button");

            button.className =
                "choice-btn";

            button.textContent =
                choice.text;


            button.addEventListener(
                "click",
                () => chooseAnswer(
                    choice,
                    button
                )
            );


            choices.appendChild(button);

        }
    );

}


// ================================
// CHOOSE ANSWER
// ================================

function chooseAnswer(
    choice,
    selectedButton
) {

    if (selectedChoice) return;

    selectedChoice = true;


    // Add love points

    lovePoint += choice.points;


    updateLoveMeter();


    // Disable all buttons

    const allButtons =
        document.querySelectorAll(".choice-btn");


    allButtons.forEach(
        btn => {
            btn.disabled = true;
            btn.style.cursor = "default";
        }
    );


    // Highlight selected

    selectedButton.classList.add(
        "correct"
    );


    // Change dialogue

    speaker.textContent =
        "Dia";


    typeText(
        choice.response
    );


    continueBtn.classList.remove(
        "hidden"
    );

}


// ================================
// CONTINUE
// ================================

continueBtn.addEventListener(
    "click",
    () => {

        currentStory++;


        if (
            currentStory >= story.length
        ) {

            showConfession();

            return;

        }


        loadStory();

    }
);


// ================================
// CONFESSION
// ================================

function showConfession() {

    showScreen(
        confessionScreen
    );

}


// ================================
// ACCEPT
// ================================

acceptBtn.addEventListener(
    "click",
    () => {

        finalLove.textContent =
            Math.min(
                Math.round(
                    (lovePoint / maxLove) * 100
                ),
                100
            ) + "%";


        showScreen(
            endingScreen
        );


        celebration();

    }
);


// ================================
// "GIVE ME TIME"
// ================================

timeBtn.addEventListener(
    "click",
    () => {

        timeBtn.textContent =
            "Tapi... aku sebenarnya juga suka kamu ❤️";


        setTimeout(() => {

            acceptBtn.textContent =
                "Kalau begitu... Aku Terima ❤️";

        }, 1200);

    }
);


// ================================
// RESTART
// ================================

restartBtn.addEventListener(
    "click",
    () => {

        currentStory = 0;

        lovePoint = 0;

        updateLoveMeter();

        showScreen(
            startScreen
        );

    }
);


// ================================
// SCREEN SWITCH
// ================================

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(
            item =>
                item.classList.remove(
                    "active"
                )
        );


    screen.classList.add(
        "active"
    );

}


// ================================
// LOVE METER
// ================================

function updateLoveMeter() {

    let percentage =
        Math.round(
            (lovePoint / maxLove) * 100
        );


    percentage =
        Math.min(
            percentage,
            100
        );


    lovePointDisplay.textContent =
        lovePoint;


    lovePercent.textContent =
        percentage + "%";


    meterFill.style.width =
        percentage + "%";

}


// ================================
// TYPING EFFECT
// ================================

function typeText(text) {

    dialogueText.textContent = "";

    let index = 0;


    const interval =
        setInterval(
            () => {

                dialogueText.textContent +=
                    text[index];

                index++;


                if (
                    index >= text.length
                ) {

                    clearInterval(
                        interval
                    );

                }

            },
            25
        );

}


// ================================
// FLOATING HEARTS
// ================================

function createHeart() {

    const heart =
        document.createElement("div");


    heart.className =
        "heart";


    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "✨"
    ];


    heart.textContent =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";


    document
        .getElementById("hearts")
        .appendChild(heart);


    setTimeout(
        () => heart.remove(),
        10000
    );

}


setInterval(
    createHeart,
    800
);


// ================================
// ENDING CELEBRATION
// ================================

function celebration() {

    for (
        let i = 0;
        i < 40;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 70
        );

    }

}
