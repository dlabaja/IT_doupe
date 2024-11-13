import {getRandomNumber, titles} from "./utils.js";

let canRun = true

window.scrambleTitle = function() {
    if (!canRun) return; // slouží jako zámek
    canRun = false;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const element = document.getElementById("title");
    let iteration = 0;

    // vybírá náhodný text, snaží se aby byl jiný než předchozí
    let chosenText = "";
    while (true) {
        chosenText = titles[getRandomNumber(titles.length)];
        if (chosenText !== element.innerText) {
            break;
        }
    }

    // tvorba 30 ms intervalu
    const interval = setInterval(() => {
        element.innerText = chosenText
            .split("") // rozdělí text na jednotlivá písmena
            .map((letter, index) => { // všechna písmena s index < iteration ponechá stejná, zbytek nastaví náhodně
                return index < iteration ? chosenText[index] : letters[getRandomNumber(letters.length)];
            })
            .join(""); // složí písmena zpět dohromady

        iteration += 1 / 3; // každé písmeno se protočí třikrát

        // index je na konci, už není co míchat
        if (iteration >= chosenText.length) {
            clearInterval(interval); // konec intervalu
            canRun = true; // uvolnění zámku
        }
    }, 30);
};