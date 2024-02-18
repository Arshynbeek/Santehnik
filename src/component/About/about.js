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