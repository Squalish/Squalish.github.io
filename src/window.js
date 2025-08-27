// Reworked Window Functions
const windows = [
    "welcome-window",
    "about-me-window",
    "projects-window",
    "socials-window",
    "faq-window",
    "guidelines-window",
    "credits-window"
]

const containers = document.querySelectorAll(".main-content");

let currentOrder = []

function Initialize() {
    containers.forEach(container => {
        container.onmousedown = () => {
            MoveOrder(container);
        }
    });
}

function ChangeOrder() {
    const windows = document.querySelectorAll(".window");

    // make every single window inactive except for the one that has the highest z index I guess
    windows.forEach(window => {
        window.classList.remove("active");
        window.classList.add("inactive");
    })

    // re-order the z-index of every single window
    for (let i = 0; i < currentOrder.length; i++) {
        currentOrder[i].style.zIndex = i.toString();

        // and then make the last one active
        if (i === currentOrder.length - 1) {
            currentOrder[i].firstElementChild.classList.remove("inactive");
            currentOrder[i].firstElementChild.classList.add("active");
            console.log(windows[i].toString());
            document.getElementById("site-title").innerText = "squalish.dev | "+currentOrder[i].getElementsByClassName("title-bar-text")[0].innerHTML;
        }
    }
}

function MoveOrder(window) {
    for (let i = 0; i < currentOrder.length; i++) {
        if (window.id === currentOrder[i].id) {
            currentOrder.splice(currentOrder.indexOf(window), 1);
        }
    }

    currentOrder.push(window);
    ChangeOrder();
}

function OpenWindow(location) {
    let current_window = document.getElementById(windows[location]);

    if (current_window.style.display === "none") {
        current_window.style.top = '50%';
        current_window.style.left = '50%';
        current_window.style.transform = 'translate(-50%, -50%)';
        current_window.style.animation = 'window-open 0.20s';
    }

    current_window.style.display = 'block';
    current_window.style.position = 'absolute';

    MoveOrder(current_window);
}

function CloseWindow(location) {
    let current_window = document.getElementById(windows[location]);

    current_window.style.animation = 'window-close 0.20s';

    current_window.addEventListener("animationend", HandleWindowCloseAnimation);

    currentOrder.splice(currentOrder.indexOf(current_window), 1);
    ChangeOrder();
}

const HandleWindowCloseAnimation = ({target}) => {
    target.style.display = 'none';
    target.removeEventListener('animationend', HandleWindowCloseAnimation);
}

// Unused for now
//function UpdateTimer() {
//    let timer = CalculateRemainingTime(new Date("08/07/2025 07:00 AM EST"));
//    let text = ""
//    if (timer[0] < 0)
//    {
//         document.getElementById("visual-artifacts-counter").style.display = "none";
//         document.getElementById("visual-artifacts-pre-save").style.display = "none";
//         document.getElementById("visual-artifacts-listen").style.display = "block";
//         return;
//     }
//     for (let i = 1; i < timer.length; i++) {
//         if (timer[i] < 10)
//         {
//             text = text + "0";
//         }
//         text = text + timer[i].toString();
//         if (i !== timer.length - 1) {
//             text += ":";
//         }
//     }
//
//     console.log(text);
//     document.getElementById("visual-artifacts-counter").textContent = text;
//     document.getElementById("visual-artifacts-counter").style.display = "block";
//     document.getElementById("visual-artifacts-pre-save").style.display = "block";
//     document.getElementById("visual-artifacts-listen").style.display = "none";
// }

OpenWindow(0);
Initialize();
// setInterval(UpdateTimer, 1000);