"use strict";


function copyThis() {
    this.select();
    this.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(this.value)
}

function copyEmail() {
    navigator.clipboard.writeText("ted.mccormick+website@gmail.com")
    document.getElementById("emailTooltip").innerHTML = "Copied \"ted.mccormick+website@gmail.com\" to clipboard!"
}

function copyEmailSecure() {
    navigator.clipboard.writeText("ted.mccormick+website@protonmail.com")
    document.getElementById("secureEmailTooltip").innerHTML = "Copied \"ted.mccormick+website@protonmail.com\" to clipboard!"
}

function outFunc(x) {
    x.querySelectorAll(':scope > .tooltiptext')[0].innerHTML = "Copy to clipboard";
}