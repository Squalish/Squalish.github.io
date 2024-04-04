aboutme = document.getElementById("aboutme");
entrance = document.getElementById("entrance");
main = document.getElementById("main-window");

window.addEventListener('DOMContentLoaded', Init)

function Init() {
    aboutme = document.getElementById("aboutme");
    entrance = document.getElementById("entrance");
    main = document.getElementById("main-window");
    ShowEntrance();
}

function ShowAboutMe() {
    entrance.style.display = "none";
    aboutme.style.display = "flex";
    main.style.height = "512px";
    console.log("about me");
}

function ShowEntrance() {
    aboutme.style.display = "none";
    entrance.style.display = "flex";
    main.style.height = "360px";
    console.log("entrance");
}