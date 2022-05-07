let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


function zoomimage(img){
    img.style.width = "430px";
    console.log(img);
}
function normalzoom(imgN){
    imgN.style.width = "420px";
}

function zoomimageFille(img){
    img.style.width = "235px";
    console.log(img);
}
function normalzoomFille(imgN){
    imgN.style.width = "233px";
}
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
    var h3 = document.querySelectorAll("h3");
    var p = document.getElementById("paragraph");
    h1.forEach(function(userItem) {
        userItem.classList.add('fade-in-h1');
    });
    h3.forEach(function(userItem) {
        userItem.classList.add('fadesoustitre');
        p.classList.add('fadesoustitre');
    });
}
function gotoBonus(el) {
    window.location.href = "../bonus.html"    
}