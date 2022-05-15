const popupBtns = document.querySelectorAll(".modal");
const closeBtn = document.querySelector(".popup__close");
const popupOverlay = document.querySelector(".popup");

if(popupBtns.length > 0) {
    for(let i =0; i < popupBtns.length; i++) {
        const singlePupup = popupBtns[i];
        singlePupup.addEventListener("click", function(e) {
            e.preventDefault();
            popupOverlay.classList.add("open");
        })
    }
}

closeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    popupOverlay.classList.remove("open"); 
    
})