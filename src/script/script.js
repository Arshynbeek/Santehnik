'use strict';

/**--add event on element--*/
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


function showCartItems() {
  const cartIDs = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCounter = document.querySelector('.basket-button');

  cartCounter.innerText = cartIDs.length;
}

showCartItems();



let videodiv = document.querySelector(".video");
let close = document.querySelector(".close");
let more = document.querySelector(".play_video");
let video = document.querySelector("#videoPlayer");


more.addEventListener("click", () => {
  videodiv.style.display = "block";
  video.play();
})

close.addEventListener("click", () => {
  videodiv.style.display = "none";
  video.load();
})