// contact 
//const nameInput = document.querySelector("#name");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");

//errors
const nameerror = document.getElementById("nameerror");
const emailerror = document.getElementById("emailerror");
const subjecterror = document.getElementById("subjecterror");
const supper = document.querySelector("#supper");


function validateForm() {
    clearMessageForm();
    if (nameInput.value.length < 3) {
        nameerror.innerText = "name must be more than 3 letters";
        nameInput.classList.add("error-border");
    }

    if (validateEmail(email.value) == false) {
        emailerror.innerText = "Enter your email adress";
        email.classList.add("error-border");
    }
    checkmesage();
}

function checkmesage() {
    const messagelength = document.getElementById("subMessage").value.length;
    if (messagelength < 20) {
        document.getElementById("subMessage").innerText = "Enter message please";
        document.getElementById("subMessage").classList.add("error-border");
    }
}

function clearMessageForm() {
    // clearl all error
    nameerror.innerText = "";
    emailerror.innerText = "";
    subjecterror.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    subMessage.classList.remove("error-border");
}

function validateEmail(emailAdress) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
        return true;
    } else {
        return false;
    }
}