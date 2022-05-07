
// function scrollerSpidey() {
//     var img = document.getElementById('home2');
//     img.style.top += 20;
// }
var btn = document.getElementById("btn");
btn.addEventListener('click',function(){
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var taille = document.getElementById("taille");
    var poid = document.getElementById("poid");
    var mail = document.getElementById("mail");
    if ((nom.value.length == 0) || (prenom.value.length == 0) || (taille.value.length == 0) || (poid.value.length == 0) ||(mail.value.length == 0)) {
        alert('Remplissez le formulaire svp');
    }
    else{
        alert('Vous donnée ont bien été recus, vous recevrez votre costumes dans 3 jours :) ');     
    }
});

var newsletter = document.getElementById("newsletterBTN");
newsletter.addEventListener('click', function(e){
    e.preventDefault();
    var nom = document.getElementById("nomNews");
    var mail = document.getElementById("mailNews");
    if ((nom.value.length == 0) ||(mail.value.length == 0)) {
        alert('Remplissez le formulaire de newsletter svp');
    }
    else{
        alert('Felicitation , vous etes abonées a notre newsletter :) ');     
    }
})
function surLigneLien(lien){
    lien.style.textDecoration = "underline";
}
function leaveligne(lien){
    lien.style.textDecoration = "none";
}
function inverser(btn){
    btn.classList.add('inverseColor');
}
function re_inverser(btn){
    btn.classList.remove('inverseColor');
}
function changeBorder(media){
    media.style.border ="1px solid white";
}
function BorderNormal(media){
    media.style.border ="none"; 
}
function fadein(){
    var h1 = document.querySelectorAll("h1");
    var img = document.getElementById('home1');
    var sous = document.querySelectorAll(".soustitre");
    h1.forEach(function(userItem) {
        userItem.classList.add('fade-in');
    });
    sous.forEach(function(item){
        item.classList.add('fadesoustitre');
    });
    img.classList.add('fade-in-img');
}

function zoomin(img){
    img.classList.add('zoom-in');
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    if(img['id'] == "img1"){
        p1.style.display = "block";
        p1.classList.add("fadesoustitre");
    }
    if(img['id'] == "img2"){
        p2.style.display = "block";
        p2.classList.add("fadesoustitre");
    }
    if(img['id'] == "img3"){
        p3.style.display = "block";
        p3.classList.add("fadesoustitre");
    }
}
function zoomout(img){
    img.classList.remove('zoom-in');
}

function fadesoustitre(){

}
function gotoBonus(el) {
    window.location.href = "../bonus.html"    
}