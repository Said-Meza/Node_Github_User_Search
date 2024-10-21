import { light, dark } from '../darkmode.js'

let darkmode = false;
const $modetxt = document.getElementById("modetxt");

document.addEventListener("click", (e) => {
    if (e.target.matches(".hero__dark__btn") || e.target.matches(".hero__span") || e.target.matches(".hero__img")) {
        e.preventDefault();
        // console.log("di click en dark mode")
        darkmode = !darkmode;

        if (darkmode) {
            light();
            $modetxt.textContent = "DARK";
            // console.log("light")
        }
        else {
            dark();
            $modetxt.textContent = "LIGHT"
            // console.log("dark")
        }
    }
})

