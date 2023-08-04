"use strict";

function toggleDisable(elements) {
    elements.forEach((element) => {
        if (element.hasAttribute("disabled")) {
            element.removeAttribute("disabled")
        }
        else {
            element.setAttribute("disabled",true)
        }
    }
    )
}


function contactSubmit(e) {
    e.preventDefault();

    let bodyJSON = JSON.stringify(`{email: ${emailform.value},name: ${nameform.value},phone: ${phoneform.value},source: ${sourceform.value}, bodtext: ${bodytextform.value}}`);
    toggleDisable([emailform,nameform,phoneform,sourceform,bodytextform])
    const requestOptions = {
        method: 'PUT',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: bodyJSON
    };
    fetch('https://00ln60gbx0.execute-api.us-east-1.amazonaws.com/production/contact', requestOptions)
    // fetch("https://request-inspector.glitch.me/", requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                window.location.href = "thankyou.html"
                return Promise.reject(error);
            }
            // document.getElementById(alert).innerHTML = data.updatedAt;
        })
        .catch(error => {
            // element.parentElement.innerHTML = `Error: ${error}`;
            console.error('There was an error!', error);
            toggleDisable([emailform,nameform,phoneform,sourceform,bodytextform])
        });
}

document.onreadystatechange = () => {
    if (document.readyState === "interactive") {

        emailform = document.getElementById("email")
        nameform = document.getElementById("name")
        phoneform = document.getElementById("phone")
        sourceform = document.getElementById("source")
        bodytextform = document.getElementById("bodytext")
        contactButton = document.getElementById("contactButton")
        contactButton.addEventListener('click',contactSubmit);
    }
};

let emailform
let nameform
let phoneform
let sourceform
let bodytextform
let contactButton



