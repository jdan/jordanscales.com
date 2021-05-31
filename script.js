var progressLeft = -24;
var $progress = document.querySelector(".progress");
var $main = document.querySelector("main");
var $note = document.querySelector(".loading-note");

var opacity = 0;
var noteOpacity = 0;

window.addEventListener("DOMContentLoaded", function () {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mediaQuery.matches) {
    $main.style.opacity = 1.0;
    $note.style.opacity = 1.0;
    $progress.style.left = "0px";
    return;
  }

  setInterval(function () {
    progressLeft += 8;
    if (progressLeft > 120) {
      progressLeft = -24;
    }

    $progress.style.left = progressLeft + "px";
  }, 100);

  var interval = setInterval(function () {
    opacity += 0.07;
    if (opacity >= 1.0) {
      clearInterval(interval);
    }

    $main.style.opacity = opacity;
  }, 100);

  setTimeout(function () {
    var interval = setInterval(function () {
      noteOpacity += 0.07;
      if (noteOpacity >= 0.9) {
        clearInterval(interval);
      }

      $note.style.opacity = noteOpacity;
    }, 100);
  }, 10000);
});
