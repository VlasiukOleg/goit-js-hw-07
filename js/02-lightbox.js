import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryItemMarkup = addGalleryItemMarkup(galleryItems);

gallery.innerHTML = galleryItemMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function addGalleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img loading='lazy' class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}
