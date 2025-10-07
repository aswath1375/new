let position = 0;

function moveBall() {
  position += 30;
  if (position > 1000) {
    position = 0;
  }
  document.getElementById("ball").style.left = position + "px";
 
}

setInterval(moveBall, 100);




function move() {
  position += 30;
  if (position > 1000) {
    position = 0;
  }
  document.getElementById("ball1").style.left = position + "px";
 
}

setInterval(move, 100);


