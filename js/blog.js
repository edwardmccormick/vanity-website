"use strict";

function fetchBlogPosts(StartWithWhichPost) {
    const requestOptions = {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }
    };
    fetch(`https://api.mccormickhub.com/blog=${StartWithWhichPost}`, requestOptions)
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
                return data.body
            }
            else if (data.statusCode == 200) {
                // get error message from body or default to response status
                console.log("Uh oh, got an error, how'd that happen?")
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            // document.getElementById(alert).innerHTML = data.updatedAt;
        })
        .catch(error => {
            // element.parentElement.innerHTML = `Error: ${error}`;
            console.error('There was an error!', error);
            toggleDisable([emailform,nameform,phoneform,sourceform,bodytextform])
        }
    )
}

function renderBlogPosts(BlogPostJson) {
    forEach Post in BlogPostJson {
        blog.innerHTML += `<h2>${Title}</h2>
                            <br>
                            ${body}
                            <br>
                            Post at ${Timestamp} by Ted`
    }
}

document.onreadystatechange = () => {
    if (document.readyState === "interactive") {

        blog = document.getElementById("blog")
        blog.innerHTML = ""
    }
};

let blog
renderBlogPosts(fetchBlogPosts(0))

