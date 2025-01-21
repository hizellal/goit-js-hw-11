fetch('https://api.unsplash.com/search/photos?query=cat&client_id=JxtDohqrvLiUtsCQPJqUcZZFVHIZOMdWOqW05zEKHjE');





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