document.addEventListener("DOMContentLoaded", function() {
    const ButtontoLobby = document.getElementById("backtolobbybutton");
    ButtontoLobby.addEventListener("click", function() {
        window.location.href = "../homepage/home.html";
    })
});

const Contactmeform = document.getElementById("contactform");
const Contactmebutton= document.getElementById("sendbutton");
const Aname = document.getElementById("Aname");
const email = document.getElementById("email");
const message = document.getElementById("message");

Contactmebutton.addEventListener("click", (event) => {
    const namevalue = Aname.value;
    const emailvalue = email.value;
    const messagevalue = message.value;
    if (namevalue && emailvalue && messagevalue !== ""){
        Contactmeform.reset();
    }
});