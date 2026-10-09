"use strict";


document.addEventListener("DOMContentLoaded", function() {
    const shareIcon = document.querySelector(".share__icon");
    const shareToastContent = document.querySelectorAll(".shareToast__content");

    shareIcon.addEventListener("click", function() {
        shareIcon.classList.toggle("share__icon--active");
        shareToastContent.forEach(content => content.classList.toggle("shareToast__content--open"));
        shareIcon.getAttribute("aria-expanded") === "true" ? 
        shareIcon.setAttribute("aria-expanded", "false") : 
        shareIcon.setAttribute("aria-expanded", "true");
    });
   
});