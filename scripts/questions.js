const qBtns = document.querySelectorAll(".icon-btn");  
const questions = document.querySelectorAll(".question");

for (let i = 0; i < qBtns.length; i++) {
    let btn = qBtns[i];
    btn.addEventListener("click", function(e) {
        const question = e.currentTarget.parentElement.parentElement;
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
}