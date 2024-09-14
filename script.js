var leftHand = document.querySelector(".left-hand")
var rightHand = document.querySelector(".right-hand")
var password = document.getElementById("userPassword")
var showPassword = document.getElementById("showPassword")
var hidePassword = document.getElementById("hidePassword")
password.addEventListener("click", () => {
    leftHand.classList.add("hide");
    rightHand.classList.add("hide");
})

showPassword.addEventListener("click", () => {
    leftHand.classList.remove("hide");
    rightHand.classList.remove("hide");
})

hidePassword.addEventListener("click", () => {
    leftHand.classList.add("hide");
    rightHand.classList.add("hide");
})