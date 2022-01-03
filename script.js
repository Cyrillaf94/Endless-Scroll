<<<<<<< HEAD
const imageContainer = document.getElementById('image-container');

let photosArray = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;


// Unsplash API
const count = 10;
// Normally, don't store API Keys like this, but an exception made here because it is free, and the data is publicly available!
const apiKey = 'jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Check if all images were loaded
function imageLoaded() {
    console.log('image loaded');
    imagesLoaded++;
    if(imagesLoaded === totalImages) {
        ready = true;
        console.log('ready =', ready);
    }
}


// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch Error Here
    }
}
// Display photos function
function displayPhotos() {
    imagesLoaded = 0;
  totalImages = photosArray.length;
  console.log('Total Images', totalImages);
  console.log(photosArray);
    // Run for each element returned
    photosArray.forEach((photo) => {
        // Create <anchor>
        const item = document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <image>
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo);
        // Event Listener, check when each loading is finished
        img.addEventListener('load', imageLoaded)
        // include <img> in <a>
        item.appendChild(img);
        // include <a> in <image-container>
        imageContainer.appendChild(item);
    });
}

// Add photos below certain level on screen
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        console.log('BRAVE NEW WORLD');
        ready = false;
        getPhotos();
    }
})


// On Load
getPhotos();
=======
const videoElement = document.getElementById('video')
const button = document.getElementById('button')

  
// Prompt user to select media stream to pass it to the video element then play it out
async function selectMediaStream() {
    try {
const mediaStream = await navigator.mediaDevices.getDisplayMedia();
videoElement.srcObject = mediaStream
videoElement.onloadedmetadata = () => {
    videoElement.play();
}
    } catch (error) {
      console.log(error)  // Catch error here
    }
}




button.addEventListener('click', async () => {
// Disable Button
button.disabled = true;
// Start Picture in Picture
await videoElement.requestPictureInPicture();
// Reset Button
button.disabled = false;
});


selectMediaStream();
>>>>>>> fbc4bfb21588d93196a18e186500c4b2c6abb12a
