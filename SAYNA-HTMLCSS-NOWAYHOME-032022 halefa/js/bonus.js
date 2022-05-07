// Set the date we're counting down to
var countDownDate = new Date("May 7, 2022 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("timer").style.fontWeight = "bold";
  document.getElementById("timer").style.color = "coral";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "DATE ECOULEE";
    document.getElementById("timer").style.color = "green";
  }
}, 1000);

function surLigneLien(lien){
    lien.style.textDecoration = "underline";
}
function leaveligne(lien){
    lien.style.textDecoration = "none";
}
function changeBorder(media){
    media.style.border ="1px solid white";
}
function BorderNormal(media){
    media.style.border ="none"; 
}
function fadein(){
    var h1 = document.querySelectorAll("h1");
    var sous_titre = document.getElementById("sous_titre");
    h1.forEach(function(userItem) {
        userItem.classList.add('fade-in-h1');
        sous_titre.classList.add('fadesoustitre');
    });
}
function gotoBonus(el) {
    window.location.href = "../bonus.html"    
}