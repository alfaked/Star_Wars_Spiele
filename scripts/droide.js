//Konföderation unabhängiger systeme
function droide(){
    document.getElementById("article").innerHTML = '<header><h2>Gehörst du zum zur Konföderation unabhängiger Systeme?</h2></header><img onclick="boese()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtBoese()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function boese(){
    document.getElementById("article").innerHTML = '<header><h2>Ist deine Produktserie die B-Serie?</h2></header><img onclick="bSerie()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtBSerie()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function bSerie(){
    document.getElementById("article").innerHTML = '<header><h2>Ist deine Waffe in deinem Arm eingebaut?</h2></header><img onclick="eingebaut()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtEingebaut()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function eingebaut(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist ein B2-Superkampfdroide!</h2></header><img class="figur" src="Assets/Bilder/B2.png">';  
}

function nichtEingebaut(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist ein B1-Kampfdroide!</h2></header><img class="figur" src="Assets/Bilder/B1.png">';  
}

function nichtBSerie(){
    document.getElementById("article").innerHTML = '<header><h2>Landest du auf fliegenden Raumschiffen?</h2></header><img onclick="fliegen()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtFliegen()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function fliegen(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist ein Buzz-Droide!</h2></header><img class="figur" src="Assets/Bilder/Buzz.png">';  
}

function nichtFliegen(){
    document.getElementById("article").innerHTML = '<header><h2>Hast du einen eigenen Schildgenerator?</h2></header><img onclick="generator()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtGenerator()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function generator(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist ein Droideka!</h2></header><img class="figur" src="Assets/Bilder/Droideka.png">';  
}

function nichtGenerator(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist ein DSD1-Zwergspinnendroide!</h2></header><img class="figur" src="Assets/Bilder/DSD1.jpg">';  
}

function nichtBoese(){
    document.getElementById("article").innerHTML = '<header><h2>Gehörst du zu den Rebellen/Widerstand?</h2></header><img onclick="rebellenDroide()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtRebellenDroide()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function rebellenDroide(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du Astromechdroide?</h2></header><img onclick="astro()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtAstro()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function astro(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Spectre?</h2></header><img onclick="spectre3()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtSpectre3()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function spectre3(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist C1-10P/Chopper!</h2></header><img class="figur" src="Assets/Bilder/Chopper.png">';  
}

function nichtSpectre3(){
    document.getElementById("article").innerHTML = '<header><h2>Ist dein bester Freund ein Protokolldroide?</h2></header><img onclick="protokoll()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtProtokoll()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function protokoll(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist R2-D2!</h2></header><img class="figur" src="Assets/Bilder/R2D2.png">';  
}

function nichtProtokoll(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist BB-8!</h2></header><img class="figur" src="Assets/Bilder/BB8.png">';  
}

function nichtAstro(){
    document.getElementById("article").innerHTML = '<header><h2>Hast/Hattest du einen roten Arm?</h2></header><img onclick="roterArm()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtRoterArm()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function roterArm(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist C-3PO!</h2></header><img class="figur" src="Assets/Bilder/C3PO.png">';  
}

function nichtRoterArm(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist AP-5!</h2></header><img class="figur" src="Assets/Bilder/AP5.png">';  
}

function nichtRebellenDroide(){
    document.getElementById("article").innerHTML = '<header><h2>Bist/Warst du ein Kopfgeldjäger?</h2></header><img onclick="kopfGJ()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtKopfGJ()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function kopfGJ(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist IG-88!</h2></header><img class="figur" src="Assets/Bilder/IG88.png">';  
}

function nichtKopfGJ(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Leibwächter?</h2></header><img onclick="leibwächter()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtLeibwächter()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function leibwächter(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist ein Magnawächter!</h2></header><img class="figur" src="Assets/Bilder/Magna.jpg">';  
}

function nichtLeibwächter(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist ein imperialer Suchdroide!</h2></header><img class="figur" src="Assets/Bilder/Suchdroide.jpg">';  
}
