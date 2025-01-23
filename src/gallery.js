import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');

const loadGallery = imgInfo => {
    return `
    <li class='gallery-images'>
        <img class='gallery-image' src='${imgInfo.urls.regular}' alt='${imgInfo.alt_description}' />
    </li>
    `;
}

const onBtnSubmit = event => {
    event.preventDefault();

    const searchedImage = event.currentTarget.elements.user_query.value.trim();
    console.log(searchedImage);
    console.log(event.currentTarget.elements);
    
    fetch(`https://api.unsplash.com/search/photos?query=${searchedImage}&client_id=JxtDohqrvLiUtsCQPJqUcZZFVHIZOMdWOqW05zEKHjE`)
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
        const galleryLoad = data.results.map(el => loadGallery(el)).join('');

        gallery.innerHTML = galleryLoad;
    })
    .catch(err => {
        console.log(err);
    });
};

searchForm.addEventListener('submit', onBtnSubmit);

//fetch('https://api.unsplash.com/search/photos?query=cat&client_id=JxtDohqrvLiUtsCQPJqUcZZFVHIZOMdWOqW05zEKHjE');





// fetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_sort=body')
//   .then(response => {
//     console.log(response);

//     if (!response.ok) {
//         throw new Error(response.status);
//     }

//       return response.json();
//    })
//    .then(data => {
//      console.log(data);
//    })
//    .catch(err => {
//     console.dir(err);

//     if(err.message === '404') {
//         alert('Постів не знайдено!');
//     }   
//    });