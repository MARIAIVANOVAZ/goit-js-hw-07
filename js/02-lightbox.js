import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");


const galleryMarkup = createGallery(galleryItems);
gallery.innerHTML = galleryMarkup;


function createGallery (galleryItems) {
  return galleryItems.map(({preview, original, description }) => {
      return   `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`}).join('');
};
// console.log(galleryMarkup);


console.log(galleryItems);

var lightbox = new SimpleLightbox('.gallery a');

gallery.addEventListener('click', onOpenLightBox);

function onOpenLightBox(event) {
    event.preventDefault();

    lightbox.options.captionsData = 'alt';
    lightbox.options.captionDelay = 250;

}