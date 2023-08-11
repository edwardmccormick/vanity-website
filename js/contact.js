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

<<<<<<< HEAD
    let bodyJSON = {email: emailform.value,name: nameform.value,phone: phoneform.value,source: sourceform.value, bodtext: bodytextform.value}

    console.log("bodyJSON looks like: \n",bodyJSON)
=======
    if (emailform.value.match)
    if (nameform.value.match)
    if (phoneform.value.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g))

    let bodyJSON = {email: emailform.value,name: nameform.value,phone: phoneform.value,source: sourceform.value, bodtext: bodytextform.value}

    // console.log("bodyJSON looks like: \n",bodyJSON)
>>>>>>> 30d8f12d87e99dfbeff809a579f43b1c826868ea

    toggleDisable([emailform,nameform,phoneform,sourceform,bodytextform])
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyJSON)
    };
    fetch('https://00ln60gbx0.execute-api.us-east-1.amazonaws.com/production/contact', requestOptions)
    // fetch("https://request-inspector.glitch.me/", requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            console.log("isJson :", isJson)
            const data = isJson && await response.json();
            // console.log("data: ", data)
            // console.log("response.statusCode: ", response.statusCode)
            // console.log("data.statusCode: ", data.statusCode)
            // check for error response
<<<<<<< HEAD
            if (response.statusCode === 200) {
                window.location.href = "thankyou.html"
            }
            else if (!response.ok) {
                // get error message from body or default to response status
=======
            if (data.statusCode == 200) {
                console.log("Everything's okay from the async response!")
                window.location.href = "thankyou.html"
            }
            else if (data.statusCode == 200) {
                // get error message from body or default to response status
                console.log("Uh oh, got an error, how'd that happen?")
>>>>>>> 30d8f12d87e99dfbeff809a579f43b1c826868ea
                const error = (data && data.message) || response.status;
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


