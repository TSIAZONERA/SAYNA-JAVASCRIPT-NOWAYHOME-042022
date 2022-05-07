function action(div){
    // content
    var p1 = document.getElementById("c1");
    var p2 = document.getElementById("c2");
    var p3 = document.getElementById("c3");
    // Titre
    var t1 = document.getElementById("t1");
    var t2 = document.getElementById("t2");
    var t3 = document.getElementById("t3");
    //image
    var i1 = document.getElementById("i1");
    var i2 = document.getElementById("i2");
    var i3 = document.getElementById("i3");
    if(div['id'] == "card1"){
        p1.style.display = "block";
        p1.classList.add("fade-in");
        t1.style.backgroundColor = "rgb(28, 28, 201,0.74)";
        i1.style.borderTopRightRadius = "0px";
    }
    if(div['id'] == "card2"){
        p2.style.display = "block";
        p2.classList.add("fade-in");
        t2.style.backgroundColor = "rgb(28, 28, 201,0.74)";
        i2.style.borderTopRightRadius = "0px";
    }
    if(div['id'] == "card3"){
        p3.style.display = "block";
        p3.classList.add("fade-in");
        t3.style.backgroundColor = "rgb(28, 28, 201,0.74)";
        i3.style.borderTopRightRadius = "0px";
    }
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
    var sous_titre = document.getElementById("sous_titre");
    h1.forEach(function(userItem) {
        userItem.classList.add('fade-in-h1');
        sous_titre.classList.add('fadesoustitre');
    });
}
function gotoBonus(el) {
    window.location.href = "../bonus.html"    
}