// JavaScript code goes here

// commands to run db.json server
// npm install -g json-server
// json-server --watch db.json

/*
function postMessage(id, title, author, imageURL, pages) {

    fetch("http://localhost:3000/books", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "id" : parseInt(id),
                "title" : title,
                "author" : author,
                "image" : imageURL,
                "pages" : parseInt(pages)
            }
        )
    })
    // .then((resp) => resp.json())
    // .then((data) => console.log(data))
}

const form = document.querySelector('form')

function handleSubmit(e) {
    e.preventDefault();

    let id = document.querySelector('input#id').value
    let title = document.getElementById('title').value
    // let title = document.querySelector("#title").value
    let author = e.target.author.value
    let imageURL = e.target.image.value
    let pages = e.target.pages.value

    postMessage(id, title, author, imageURL, pages)

}

form.addEventListener('submit', handleSubmit)
*/

const form = document.querySelector('form')

function handleSubmit(e) {
    e.preventDefault()

    // grabs entered form values
    let id = document.querySelector('#id').value
    let title = e.target.title.value
    let author = document.querySelector('input#author').value
    let imageURL = document.getElementById('image').value
    let pages = e.target.pages.value

    // POST request
    fetch("http://localhost:3000/books", { // routes to API
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( // converts object to JSON
            { // creates object to POST to API
                // "id" : id,
                "title" : title,
                "author" : author,
                "image" : imageURL,
                "pages" : parseInt(pages) // typecasts to integer
            }
        )
    })
}

form.addEventListener('submit', handleSubmit) // POSTS on form submission