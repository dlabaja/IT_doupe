import {getRandomNumber, titles} from "./utils.js";

console.log("page loaded")

window.changeTitle = function() {
    document.getElementById("title").innerText = titles[getRandomNumber(titles.length)]
}

