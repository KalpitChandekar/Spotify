let songIndex = 0;
let audioElement = new Audio("/songs/1.mp3");
let masterPlay = document.getElementById("master-play");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let songs = [
  { songName: "Jadugar", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
  { songName: "Jadugar", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
  { songName: "Jadugar", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
  { songName: "Jadugar", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
  { songName: "Jadugar", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
  { songName: "Jadugar", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
];

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
