const button = document.querySelector(".button-order");
const buttonClose = document.querySelector(".popup-close");
const popup = document.querySelector(".popup");

function togglePopup() {
    popup.classlist.toggle("popup-active");
}

button.addEventListener("click", togglePopup);
buttonClose.addEventListener("click", togglePopup);