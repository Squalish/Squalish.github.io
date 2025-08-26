function isMobile() {
    return window.matchMedia("(max-width: 540px)").matches;
}

const meow = [
    "win1",
    "win2",
    "win3",
    "win4",
    "win5",
    "win6",
    "win7",
];

function check()
{
    if (isMobile()) {
        console.log("You are on a mobile device!");
        for (let i = 0; i < meow.length; i++) {
            {
                const content = document.getElementById("content");
                content.style.transform  = "scale(0.70, 0.70)";
                content.style.position = 'absolute';
                content.style.top = '50%';
                content.style.left = '50%';
            }
        }
    } else {
        console.log("You are on a desktop device!");
    }
}

check();