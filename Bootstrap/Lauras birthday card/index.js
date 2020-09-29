var bbutton = document.querySelector(".birthday-button");
var musicon = false;
var music = new Audio("sounds/reggaeshort.mp3");

bbutton.addEventListener("click", function() {
  if (musicon) {
    musicon = false;
    music.pause();
  } else {
    musicon = true;
    music.play();

  }
});
