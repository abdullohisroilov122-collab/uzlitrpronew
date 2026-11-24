// ==========================================================================
// UzLitrPro — factory video: big play button over the poster, loads on demand
// ==========================================================================

(function () {
  const video = document.getElementById("factory-video-player");
  const button = document.querySelector(".video-play");
  if (!video || !button) return;

  const frame = video.closest(".video-frame");

  button.addEventListener("click", () => {
    frame.classList.add("is-playing");
    video.play().catch(() => { /* the native controls are still there */ });
  });
  video.addEventListener("play", () => frame.classList.add("is-playing"));
  video.addEventListener("ended", () => frame.classList.remove("is-playing"));
})();
