import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");


const galleryMarkup = createGallery(galleryItems);
gallery.innerHTML = galleryMarkup;


function createGallery (galleryItems) {
  return galleryItems.map(({preview, original, description }) => {
      return   `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`}).join('');
};
// console.log(galleryMarkup);

gallery.addEventListener('click', onOpenModal);

function onOpenModal(event) {
 event.preventDefault();

 if (event.target.nodeName !== "IMG") {
  return;
}
galleryItems.map((item) => {
  if (item.original === event.target.dataset.source) {
    const instance = basicLightbox.create(
      ` <img src=${item.original} width="800" height="600">`
    );
    instance.show();
}
  })
}
