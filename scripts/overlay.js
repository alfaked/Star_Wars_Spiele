//Beim Anklicken des Buttons "Anleitung"
function anleitung(){
    document.getElementById("over").innerHTML = "<div class='umanleitung'><p class='anleitung'>Erstmal überlegst du dir einen Star-Wars-Charakter. Danach stelle ich dir Fragen zum Charakter. Diese beantwortest du mit Ja oder Nein. Anschließend errate ich deinen Star-Wars-Charakter!</p><button class='btn blue' onclick='zurück()'>← Zurück</button></div>";
}

//Beim Anklicken des Buttons "Zurück"
function zurück(){
    document.getElementById("over").innerHTML = '<button class="erster btn" onclick="los()">SPIELEN</button><button class="zweiter btn" onclick="anleitung()">ANLEITUNG</button>';
}

//Beim Anklicken des Buttons "Spielen"
function los(){
    document.getElementById("umoverlay").innerHTML = "";
}



