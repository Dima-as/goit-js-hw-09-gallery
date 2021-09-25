import cards from "../template/template-cards.hbs";
import gallery from "../js/app.json";

const refs={
	list:document.querySelector(".js-gallery"),
	modal:document.querySelector('.js-lightbox'),
	btn: document.querySelector('[data-action="close-lightbox"]'),
	images:document.querySelector('.lightbox__image'),
	overlay:document.querySelector('.lightbox__overlay')
 }
 const {list,modal,btn,images,overlay}=refs
// const list = document.querySelector('.js-gallery')
list.insertAdjacentHTML("afterbegin",cards({ gallery }))

console.log(list);


list.addEventListener('click', onOpenModalBtn);
btn.addEventListener('click', closeModalBtn);
overlay.addEventListener('click',onOverlayClose);

function onOpenModalBtn (event){
  window.addEventListener('keydown',onEscKeydown)
  
   const isGalleryImage = event.target.classList.contains('gallery__image')
   if (!isGalleryImage) {
    return;
  }
   event.preventDefault()
   modal.classList.add('is-open');
   images.src = event.target.dataset.source;
   images.alt = event.target.alt;

}

function closeModalBtn (event){
	window.removeEventListener('keydown',onEscKeydown)
  modal.classList.remove("is-open");
  images.removeAttribute('src')
}

function onOverlayClose (event){
  if (event.target.nodeName !=='DIV' ) {
    return
  }
  closeModalBtn ()

}

function onEscKeydown(event){
   console.log(event.code);
  if (event.code !== 'Escape') {
    return
  }
   closeModalBtn ()
}
