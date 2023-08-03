"use strict";

function contactSubmit(e) {
    e.preventDefault();
    let emailform = document.getElementById("email")
    let nameform = document.getElementById("name")
    let phoneform = document.getElementById("phone")
    let sourceform = document.getElementById("source")
    let bodytextform = document.getElementById("bodytext")
    let contactButton = document.getElementById("contactButton")
    let bodyJSON = JSON.stringify(`{email: ${emailform.value},name: ${nameform.value},phone: ${phoneform.value},source: ${sourceform.value}, bodtext: ${bodytextform.value}}`);
    emailform.setAttribute("disabled",true)
    nameform.setAttribute("disabled", true)
    phoneform.setAttribute("disabled", true)
    sourceform.setAttribute("disabled", true)
    bodytextform.setAttribute("disabled", true)
    contactButton.setAttribute("disabled",true)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: bodyJSON
    };
    fetch('https://api.mccormickhub.com/contact', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            document.getElementById(alert).innerHTML = data.updatedAt;
        })
        .catch(error => {
            element.parentElement.innerHTML = `Error: ${error}`;
            console.error('There was an error!', error);
        });
}

document.onreadystatechange = () => {
    if (document.readyState === "interactive") {
        document.getElementById("contactButton").addEventListener('click',contactSubmit);
    }
};

