const popupElems = document.querySelectorAll(".popup-elem");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

//чтобы избежать двойного нажатия  
let unlock = true;

//для корректной работы скролла и свойства transition
const timeout = 800;

if (popupElems.length > 0) {
    for (let i = 0; i < popupElems.length; i++) {
        const popupElem = popupElems[i];
        popupElem.addEventListener("click",  (e) => {
            const popupName = popupElem.getAttribute("href").replace("#", "");
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        })
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector(".popup.open");

        currentPopup.classList.add("open");
    }
}