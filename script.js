/* ==================================
   BIRTHDAY DATE & TIME
================================== */

const birthday = new Date(
    "2026-12-25T00:00:00+05:30"
);


/* ==================================
   HTML ELEMENTS
================================== */

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");

const surpriseButton =
    document.getElementById("surpriseButton");

const lockMessage =
    document.getElementById("lockMessage");

const popup =
    document.getElementById("popup");

const closePopup =
    document.getElementById("closePopup");


/* ==================================
   CHECK BIRTHDAY TIME
================================== */

function updateCountdown() {

    // Current device time
    const now = new Date();


    // Remaining milliseconds
    const difference =
        birthday.getTime() - now.getTime();


    /* ==============================
       BIRTHDAY HAS ARRIVED
    ============================== */

    if (difference <= 0) {

        daysElement.textContent = "00";

        hoursElement.textContent = "00";

        minutesElement.textContent = "00";

        secondsElement.textContent = "00";


        surpriseButton.textContent =
            "🔓 Open My Surprise ❤️";


        lockMessage.textContent =
            "Your special day has arrived! 🎂❤️";


        surpriseButton.classList.add(
            "unlocked"
        );


        surpriseButton.onclick =
            openBirthday;


        return;

    }


    /* ==============================
       CALCULATE TIME
    ============================== */

    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    /* ==============================
       SHOW ON SCREEN
    ============================== */

    daysElement.textContent =
        String(days).padStart(2, "0");


    hoursElement.textContent =
        String(hours).padStart(2, "0");


    minutesElement.textContent =
        String(minutes).padStart(2, "0");


    secondsElement.textContent =
        String(seconds).padStart(2, "0");

}


/* ==================================
   BUTTON CLICK
================================== */

surpriseButton.addEventListener(
    "click",
    function () {

        const now = new Date();


        /* Birthday not reached */

        if (now < birthday) {

            popup.classList.add("show");

            return;

        }


        /* Birthday reached */

        openBirthday();

    }
);


/* ==================================
   OPEN BIRTHDAY
================================== */

function openBirthday() {

    alert(
        "Happy Birthday Sonu! ❤️🎂"
    );

    // Later yahan main website open karenge.
}


/* ==================================
   CLOSE POPUP
================================== */

closePopup.addEventListener(
    "click",
    function () {

        popup.classList.remove(
            "show"
        );

    }
);


/* ==================================
   RUN EVERY SECOND
================================== */

updateCountdown();

setInterval(
    updateCountdown,
    1000
);