"use strict";

function fetchBlogPosts(StartWithWhichPost) {
    const requestOptions = {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }
    };
    // fetch(`https://api.mccormickhub.com/blog=${StartWithWhichPost}`, requestOptions)
    fetch(`https://api.mccormickhub.com/blog`, requestOptions)
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
                let blogposts = JSON.parse(data.body)
                console.log(blogposts)
                console.log(typeof JSON.parse(data.body))
                // renderAllBlogPosts(blogposts)
                renderBlogPost(blogposts[0])
                renderBlogPost(blogposts[1])
                renderBlogPost(blogposts[2])
                renderBlogPost(blogposts[3])
                renderBlogPost(blogposts[4])
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

        }
    )
}

function renderBlogPost(BlogPost) {
    blog.innerHTML += `<h2 class="text-xl text-blue-900">${BlogPost.Title}</h2>
                            <br>
                            ${BlogPost.Body}
                            <br>
                            Post at ${BlogPost.Timestamp} by Ted
                            <br>
                            <br>`
}

function renderAllBlogPosts(BlogPosts) {
    for (var i; i<BlogPosts.length; i++) {renderBlogPost(BlogPosts[i])}
}

document.onreadystatechange = () => {
    if (document.readyState === "interactive") {

        blog = document.getElementById("blog")
        fetchBlogPosts(0)
        blog.innerHTML = `<div id="blog"></div>`

    }
};

let blog


// const renderStartingPosts = startingBlogPosts.then(renderAllBlogPosts(startingBlogPosts),renderBlogPost({Title:Error,body:"Huh, something went wrong.",Timestamp:"October 4th"}))

