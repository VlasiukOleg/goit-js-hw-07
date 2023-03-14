import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkUp = addGalleryMarkUp(galleryItems);

gallery.innerHTML = galleryMarkUp;
gallery.addEventListener('click', onGalleryImageClickToOpenModal);

function addGalleryMarkUp(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
         <img class="gallery__image" data-source="${original}" src="${preview}" alt="${description}"/>
         </a>
        </li>`;
    })
    .join('');
}

function onGalleryImageClickToOpenModal(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`);
  instance.show();

  onPressEcstoCloseModal(instance);
}

function onPressEcstoCloseModal(instance) {
  window.document.addEventListener('keydown', evt => {
    if (!instance.visible()) {
      return;
    }

    if (evt.code === 'Escape') {
      instance.close();
    }
    console.log(evt.code);
  });
}
