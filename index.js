import{i as c,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const m=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),n=document.querySelector(".loader-container"),p=()=>{n.classList.remove("hidden")},u=()=>{n.classList.add("hidden")},g=r=>`
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
    `,y=r=>{r.preventDefault();const a=r.currentTarget.elements.user_query.value.trim();if(l.innerHTML="",!a){c.error({message:"Please enter a search query!",position:"topRight",color:"#ef4040"});return}p(),fetch(`https://pixabay.com/api/?key=48415738-453a35c27b5ce388251d5c099&q=${a}&image_type=photo`).then(t=>(t.ok||c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",position:"topRight",color:"#ef4040"}),t.json())).then(t=>{if(t.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#ef4040"});return}const o=t.hits.map(e=>g(e)).join("");l.innerHTML=o,new d(".js-gallery a",{captionsData:"alt",captionDelay:250})}).catch(t=>{console.log(t)}).finally(()=>{u()})};m.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
