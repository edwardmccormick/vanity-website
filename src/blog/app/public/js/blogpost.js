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


    let bodyJSON = {Title: titleform.value,Body: bodytextform.value,passcode: passcodeform.value}

    console.log("bodyJSON looks like: \n",bodyJSON)

    toggleDisable([titleform, bodytextform, passcodeform])
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyJSON)
    };
    fetch('https://api.mccormickhub.com/blog', requestOptions)
        // fetch("https://request-inspector.glitch.me/", requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            console.log("isJson :", isJson)
            const data = isJson && await response.json();
            // console.log("data: ", data)
            // console.log("response.statusCode: ", response.statusCode)
            // console.log("data.statusCode: ", data.statusCode)
            // check for error response

            if (data.statusCode == 200) {
                console.log("Everything's okay from the async response!")
                toggleDisable([titleform, bodytextform, passcodeform])
                alertDiv.innerHTML = `<span class="text-blue-900">Blog post "${titleform.value} posted successfully!</span>`
                titleform.value = ""
                bodytextform.value = ""

            }
            else if (data.statusCode == 200) {
                // get error message from body or default to response status
                console.log("Uh oh, got an error, how'd that happen?")
                alertDiv.innerHTML = `Blog post "${titleform.value} failed! Check the console for more details.`
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

        titleform = document.getElementById("Title")
        passcodeform = document.getElementById("passcode")
        bodytextform = document.getElementById("Body")
        contactButton = document.getElementById("contactButton")
        contactButton.addEventListener('click',contactSubmit);
        alertDiv = document.getElementById("alert")
    }
};

let titleform
let passcodeform
let bodytextform
let contactButton
let alertDiv

