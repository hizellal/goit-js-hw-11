import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');
const loaderContainer = document.querySelector('.loader-container');

const showLoader = () => {
    loaderContainer.classList.remove('hidden');
};

const hideLoader = () => {
    loaderContainer.classList.add('hidden');
};

const loadGallery = imgInfo => {
    //console.log(imgInfo);
    return `
    <li class='gallery-images'>
    <a href='${imgInfo.largeImageURL}'>
        <img 
        class='gallery-image' 
        src='${imgInfo.webformatURL}' 
        alt='${imgInfo.tags.split(",").slice(0, 3)}' 
        />
    </a>
        <div class='gallery-image-card js-gallery-image-card'>
            <p class='image-card-likes'><span class="card-title">Likes</span><br>${imgInfo.likes}</p>
            <p class='image-card-views'><span class="card-title">Views</span><br>${imgInfo.views}</p>
            <p class='image-card-comments'><span class="card-title">Comments</span><br>${imgInfo.comments}</p>
            <p class='image-card-downloads'><span class="card-title">Downloads</span><br>${imgInfo.downloads}</p>
        </div>
    </li>
    `;
}

const onBtnSubmit = event => {
    event.preventDefault();

    const searchedImage = event.currentTarget.elements.user_query.value.trim();
    //console.log(searchedImage);
    gallery.innerHTML = '';

    if (!searchedImage) {
        iziToast.error({
            message: 'Please enter a search query!',
            position: 'topRight',
            color: '#ef4040',
        });
        return;
    }

    showLoader();

    fetch(`https://pixabay.com/api/?key=48415738-453a35c27b5ce388251d5c099&q=${searchedImage}&image_type=photo`)
    .then(response => {
        if (!response.ok) {
          iziToast.error({
          message: "Sorry, there are no images matching your search query. Please try again!",
          messageColor: '#fff',
          position: 'topRight',
          color: '#ef4040',
        });
        }

        return response.json();
    })
    .then(data => {
        if (data.hits.length === 0) {
        //if (data.hits.length === 0 || !searchedImage) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                color: '#ef4040',
            });
            return;
        }
        const galleryLoad = data.hits.map(el => loadGallery(el)).join('');

        gallery.innerHTML = galleryLoad;

        new SimpleLightbox('.js-gallery a', { captionsData: 'alt', captionDelay: 250 });
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        hideLoader();
    });
};

searchForm.addEventListener('submit', onBtnSubmit);