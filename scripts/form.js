const nameInput = document.getElementById("name-input");
const numberInput = document.getElementById("number-input");
const formBtn = document.querySelector(".popup__btn");
const nameError = document.querySelector(".name-error");
const numberError = document.querySelector(".number-error");

function validateName() {
    if (!nameInput.value) {
        nameError.innerHTML = "Пожалуйста, введите имя";
        nameInput.classList.add("red");
        return false; 
    } else {
        nameError.innerHTML = "";
        nameInput.classList.remove("red");
        return true;
    }
}

function validateNumber() {
    let phoneFormat = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (!numberInput.value) {
        numberError.innerHTML = "Пожалуйста, введите номер телефона";
        numberInput.classList.add("red");
        return false;
    } else if (numberInput.value.match(phoneFormat)) {
        numberError.innerHTML = ""; 
        numberInput.classList.remove("red");
        return true;
    } else {
        numberError.innerHTML = "";
        numberError.innerHTML = "Неверный формат";
        numberInput.classList.add("red");
        return false;
    }
}

formBtn.addEventListener("click", function() {
    validateName();
    validateNumber();
    
    if (validateName() && validateNumber()) {
        const success = document.querySelector(".popup__success");
        success.classList.add("visible"); 
        formBtn.setAttribute("disabled", true);
    }
});
