import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const getItemTemplate = ({ preview, description, original }) =>
  `<a class="gallery__item"  href="${original}" >
      <img class="gallery__image" src ="${preview}" alt ="${description}">
    </a>`;

const galleryRef = document.querySelector('.gallery');

const renderGallery = () => {
  const lis = galleryItems.map((item) => getItemTemplate(item));
  galleryRef.insertAdjacentHTML('beforeend', lis.join(''));
};

renderGallery();

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250ms', });