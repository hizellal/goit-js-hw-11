import{i,S as n}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const d=document.querySelector(".js-search-form"),m=document.querySelector(".js-gallery"),l=document.querySelector(".loader-container"),p=()=>{l.classList.remove("hidden")},u=()=>{l.classList.add("hidden")},g=r=>(console.log(r),`
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
    `),y=r=>{r.preventDefault();const a=r.currentTarget.elements.user_query.value.trim();p(),fetch(`https://pixabay.com/api/?key=48415738-453a35c27b5ce388251d5c099&q=${a}&image_type=photo`).then(t=>(t.ok||i.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",position:"topRight",color:"#ef4040"}),t.json())).then(t=>{if(t.hits.length===0||!a){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#ef4040"});return}const o=t.hits.map(e=>g(e)).join("");m.innerHTML=o,new n(".js-gallery a",{captionsData:"alt",captionDelay:250})}).catch(t=>{console.log(t)}).finally(()=>{u()})};d.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
