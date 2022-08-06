import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

const refs = {
  galleryEl: document.querySelector('.gallery'),
};

//================================================================

const galleryMarkup = createGalleryMarkup(galleryItems);
refs.galleryEl.innerHTML = galleryMarkup;
// refs.galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `

        <a class="gallery__item" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
        </a>
        `;
    })
    .join('');
}

new SimpleLightbox('.gallery .gallery__item', {
  overlayOpacity: 1,
  captionsData: 'alt',
  captionDelay: 250,
});
