import{i as c,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),n=document.querySelector(".loader-container"),m=()=>{n.classList.remove("hidden")},p=()=>{n.classList.add("hidden")},g=r=>`
    <li class='gallery-images'>
    <a href='${r.largeImageURL}'>
        <img 
        class='gallery-image' 
        src='${r.webformatURL}' 
        alt='${r.tags.split(",").slice(0,3)}' 
        />
    </a>
        <div class='gallery-image-card js-gallery-image-card'>
            <p class='image-card-likes'><span class="card-title">Likes</span><br>${r.likes}</p>
            <p class='image-card-views'><span class="card-title">Views</span><br>${r.views}</p>
            <p class='image-card-comments'><span class="card-title">Comments</span><br>${r.comments}</p>
            <p class='image-card-downloads'><span class="card-title">Downloads</span><br>${r.downloads}</p>
        </div>
    </li>
    `,h=r=>{r.preventDefault();const a=r.currentTarget.elements.user_query.value.trim();if(l.innerHTML="",!a){c.error({message:"Please enter a search query!",position:"topRight",color:"#ef4040"});return}m(),fetch(`https://pixabay.com/api/?key=48415738-453a35c27b5ce388251d5c099&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>(s.ok||c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",position:"topRight",color:"#ef4040"}),s.json())).then(s=>{if(s.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#ef4040"});return}const o=s.hits.map(e=>g(e)).join("");l.innerHTML=o,new d(".js-gallery a",{captionsData:"alt",captionDelay:250})}).catch(s=>{console.log(s)}).finally(()=>{p()})};u.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
