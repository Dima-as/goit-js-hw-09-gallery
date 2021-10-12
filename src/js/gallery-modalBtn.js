import cards from "../template/template-cards.hbs";
import gallery from "./app.json";

const refs = {
  list: document.querySelector(".js-gallery"),
  modal: document.querySelector(".js-lightbox"),
  btn: document.querySelector('[data-action="close-lightbox"]'),
  images: document.querySelector(".lightbox__image"),
  overlay: document.querySelector(".lightbox__overlay"),
  galleryImg: document.querySelector("original"),
};
const { list, modal, btn, images, overlay, galleryImg } = refs;
let currentIndex;
list.insertAdjacentHTML("afterbegin", cards(gallery));

list.addEventListener("click", onOpenModalBtn);
btn.addEventListener("click", closeModalBtn);
overlay.addEventListener("click", onOverlayClose);

function onOpenModalBtn(event) {
  window.addEventListener("keydown", onEscKeydown);
  window.addEventListener("keydown", ArrowRight);

  const isGalleryImage = event.target.classList.contains("gallery__image");
  if (!isGalleryImage) {
    return;
  }
  event.preventDefault();
  modal.classList.add("is-open");
  images.src = event.target.dataset.source;
  images.alt = event.target.alt;
}

function closeModalBtn(event) {
  window.removeEventListener("keydown", onEscKeydown);
  window.removeEventListener("keydown", ArrowRight);
  modal.classList.remove("is-open");
  images.removeAttribute("src");
}

function onOverlayClose(event) {
  if (event.target.nodeName !== "DIV") {
    return;
  }
  closeModalBtn();
}

function onEscKeydown(event) {
  if (event.code === "Escape") {
    closeModalBtn();
  }
  // console.log(event.code); отоброжает нажатия кнопок на клаве
}
const img = document.querySelectorAll("[data-source]");
let index = 0;
function ArrowRight(evt) {
  let element = [];
  for (let i = 0; i < img.length; i += 1) {
    element.push(img[i].dataset.source);
  }
  if (evt.code === "ArrowRight") {
    images.src = element[index];
    index += 1;
    if (index === element.length) {
      index = 0;
    }
  }

  if (evt.code === "ArrowLeft") {
    images.src = element[index];
    index += 1;
    if (index === element.length) {
      index = 0;
    }
  }
}
