window.onload=showtime
function gettime(){
  var date = new Date();
  time = date.toLocaleTimeString();
  document.getElementById("clock").innerHTML = time;
}
function showtime(){
  setInterval(gettime,1000);
}
