var bbutton = document.querySelector(".birthday-button");

console.log(bbutton);

bbutton.addEventListener("click", function() {
  var music = new Audio("sounds/reggaeshort.mp3");
  music.play();
});
