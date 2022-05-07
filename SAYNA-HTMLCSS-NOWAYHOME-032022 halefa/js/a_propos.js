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
var btn = document.getElementById("btn");
btn.addEventListener('click',function(e){
    e.preventDefault();
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var msg = document.getElementById("msg");
    var mail = document.getElementById("mail");
    if ((nom.value.length == 0) || (prenom.value.length == 0) || (msg.value.length == 0) || (mail.value.length == 0)) {
        alert('Remplissez le formulaire svp');
    }
    else{
        alert('Votre message a bien été postée sur le forum officiel de Spidey :) ');
    }
});

function gotoBonus(el) {
    window.location.href = "../bonus.html"    
}