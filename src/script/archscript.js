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
});
