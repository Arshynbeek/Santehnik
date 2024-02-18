document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".more-image img");

  function styleImage() {
    this.parentNode.style.padding = "0px";
    this.parentNode.style.transition = "all 0.3s";
  }

  function resetImage() {
    this.parentNode.style.padding = "10px";
    this.parentNode.style.transition = "all 0.3s";
  }

  images.forEach(image => {
    image.addEventListener("mouseenter", styleImage);
    image.addEventListener("mouseleave", resetImage);
  });


  const moveLeftButton = document.querySelector(".move-left");
  const moveRightButton = document.querySelector(".move-right");
  const productsElement = document.getElementById("products");

  function moveLeft() {
      productsElement.scrollBy({
          left: -274,
          behavior: "smooth"
      });
  }

  function moveRight() {
      productsElement.scrollBy({
          left: 274,
          behavior: "smooth"
      });
  }

  moveLeftButton.addEventListener("click", moveLeft);
  moveRightButton.addEventListener("click", moveRight);
});