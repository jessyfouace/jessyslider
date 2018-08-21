// Timing for next img
var timersecond = setInterval(slidertimer, 4000);
// Create table from the class carimg
var table = Array.from(document.getElementsByClassName("carimg"));
// set a value for i to 0 for change the src (previous)
var i = 0;
// set an event onclick for next and previous
document.getElementById("beforeslider").onclick = function() {leftcar()};
document.getElementById("nextslider").onclick = function() {rightcar()};


// AUTOCHANGE IMG
function slidertimer() {
  // Limit for ++ if i is more than table we reset the i
  if (i == table.length - 1) {
    i = 0;
  }

  i++;
  // Change the src of the span
  if (i < table.length) {
    document.getElementById("firstcar").src=table[i].src;
  }
}
slidertimer();


// CLICK FOR SEE PREVIOUS IMG
function leftcar() {
  // Limit for -- if i is less than table we reset the i
  if (i == 1) {
    i = table.length;
  }

  i--;
  // Change the src of the span
  document.getElementById("firstcar").src=table[i].src;
  // Reset and restart interval
  clearInterval(timersecond);
  timersecond = setInterval(slidertimer, 4000);
}


// CLICK FOR SEE NEXT IMG
function rightcar() {
  // Limit for ++ if i is more than table we reset the i
  if (i == table.length -1) {
    i = 0;
  }

  i++;
  // Change the src of the span
  document.getElementById("firstcar").src=table[i].src;
  // Reset and restart interval
  clearInterval(timersecond);
  timersecond = setInterval(slidertimer, 4000);
}
