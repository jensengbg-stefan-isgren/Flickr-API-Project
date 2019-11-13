// Importing functions from modules folder
import {
  getData
} from './modules/GetFlickrData.js';

import {
  clearForm
} from './modules/clearForm.js';

import {
  getNumberOfImages,
  getInputValue
} from './modules/userInput.js';

//Search inputField
let inputField = document.getElementById("search__input");

// Starting the search for images
inputField.addEventListener('keydown', async (event) => {
  if (event.keyCode == 13 && inputField.value != "") {
    event.preventDefault();
    document.getElementById("gallery").style.display = "grid";
    let imageArray = await getData(getInputValue, getNumberOfImages);
    createImages(imageArray);
    clearForm();
    scrollGallery();
  }
});

// Scrolls back to the top after hitting the Esc key
document.addEventListener('keydown', event => {
  if (event.keyCode === 27) {
    let header = document.getElementById("main__header");
    header.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
});

// Scrolling into the gallery after hitting the search
let scrollGallery = () => {
  let gallery = document.getElementById("gallery");
  gallery.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// Creating the images and setting the src and appending it to the gallery
let createImages = imageArray => {
  const IMAGE_GALLERY = document.getElementById('gallery');
  IMAGE_GALLERY.innerHTML = "";
  const FARM = "https://farm";
  const DOMAIN = ".staticflickr.com/";
  imageArray.forEach(element => {
    let newImgTag = document.createElement("img");
    newImgTag.classList.add('gallery__image');
    let src = `${FARM}${element.farm}${DOMAIN}${element.server}/${element.id}_${element.secret}`;
    newImgTag.setAttribute('src', src + "_m.jpg")
    newImgTag.addEventListener('click', () => {
      showImageInLightBox(src)
    });
    IMAGE_GALLERY.append(newImgTag);
  });
};

// Creating the element and appending it to the body
let lightBoxOverlay = () => {
  const lightBox = document.createElement("div");
  lightBox.id = "lightbox";
  lightBox.classList.add("active");
  document.body.appendChild(lightBox);
  return lightBox;
};

// Creating the img element inside the lightbox and showing it
let showImageInLightBox = (src) => {
  const lightBox = lightBoxOverlay();
  const lightBoxImage = document.createElement("img");
  let imgUrl = src + '_z.jpg';
  lightBoxImage.src = imgUrl;
  lightBoxImage.classList.add("lightboximage");
  lightBox.appendChild(lightBoxImage);
  closeImage(lightBox);
}

//Add event to lightbox and close it if clicked outside
let closeImage = lightBox => {
  lightBox.addEventListener("click", event => {
    if (event.target !== event.currentTarget) return;
    lightBox.remove();
  });
};






















// 1. Användaren kör sökning i input fält!
// 2. Hämta data!
// 3. ta objekt lagra i array
// 4. skapa image urlen:
// 5 skapa img taggar och appenda url! samt img tagg!