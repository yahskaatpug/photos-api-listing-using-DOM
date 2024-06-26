

let photosList;
const ulProductElem = document.getElementById("photos-list");

fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => { return response.json() }) // use return keyword if you use braces
    .then((updatedResponse) => {
        photosList = updatedResponse;
        console.log("updatedPhotosList", photosList);
        displayPhotos(); // call this once we have photosList
    })
    .catch((err) => console.log(err));

function displayPhotos() {
    const photosFragment = document.createDocumentFragment();


    for (let i = 0; i < photosList.length; i++) {
        const photo = photosList[i];
        console.log("newProductLi", photo);

        const listElem = document.createElement("li");
        const image = document.createElement("img");
        const title = document.createElement("p");
        const url = document.createElement("p");

        image.className = "img";
        title.className = "title";
        url.className = "url";

        listElem.className = "card";
        image.src = photo.thumbnailUrl;
        image.height = 50;
        image.width = 50;
        title.innerText = photo.title;
        url.innerText = photo.url;

        listElem.appendChild(image);
        listElem.appendChild(title);
        listElem.appendChild(url);

        photosFragment.appendChild(listElem);
        console.log("listElem:", listElem);
    }

    console.log("photoFragment", photosFragment);

    ulProductElem.innerHTML = '';

    ulProductElem.appendChild(photosFragment);
}

    // here we are following event bubbling so that we do not have to use event listner on every button
document.addEventListener('DOMContentLoaded', () => {

    function handleClick(event){
        const liElem = event.target.closest('li');
        console.log("wowo",liElem);
        if(liElem){
            // extract redirect url from li element
            const url = liElem.querySelector('.url');
            console.log("url",url.innerText);
            window.open(url.innerText);
        }
    }

    const photosList = document.getElementById('photos-list');
    photosList.addEventListener('click', handleClick);
})