//Sith
function person(){
    document.getElementById("article").innerHTML = '<header><h2>Bist/Warst du ein Sith/Dunkler Jedi?</h2></header><img onclick="sith()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtSith()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function sith(){
    document.getElementById("article").innerHTML = '<header><h2>Warst du ein Jedi/Padawan?</h2></header><img onclick="jedi1()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtJedi1()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function jedi1(){
    document.getElementById("article").innerHTML = '<header><h2>Hattest du zu deinen Jedi-Zeiten einen eigenen Padawan?</h2></header><img onclick="padawan()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtPadawan()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function padawan(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Cyborg?</h2></header><img onclick="cyborg1()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtCyborg1()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function cyborg1(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Anakin Skywalker/Darth Vader!</h2></header><img class="figur" src="Assets/Bilder/AnakinSkywalker.png">';  
}

function nichtCyborg1(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Count Dooku/Darth Tyrannus!</h2></header><img class="figur" src="Assets/Bilder/CountDooku.png">';  
}

function nichtPadawan(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du weiblich?</h2></header><img onclick="weiblich3()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtWeiblich3()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function weiblich3(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Asajj Ventress!</h2></header><img class="figur" src="Assets/Bilder/AsajjVentress.png">';  
}

function nichtWeiblich3(){
    document.getElementById("article").innerHTML = '<header><h2>Wurdest du von einem Klon umgebracht?</h2></header><img onclick="klonHatGekillt()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtKlonHatGekillt()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function klonHatGekillt(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Pong Krell!</h2></header><img class="figur" src="Assets/Bilder/Krell.png">';  
}

function nichtKlonHatGekillt(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Ben Solo/Kylo Ren!</h2></header><img class="figur" src="Assets/Bilder/KyloRen.png">';  
}

function nichtJedi1(){
    document.getElementById("article").innerHTML = '<header><h2>Hast du deinen Sith-Meister umgebracht?</h2></header><img onclick="sithKiller()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtSithKiller()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">'
}

function sithKiller(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Sheev Palpatine/Darth Sidious!</h2></header><img class="figur" src="Assets/Bilder/Palpatine.png">';  
}

function nichtSithKiller(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Darth Maul!</h2></header><img class="figur" src="Assets/Bilder/Maul.png">';  
}


//Jedi
function nichtSith(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Jedi?</h2></header><img onclick="jedi()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtJedi()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function jedi(){
    document.getElementById("article").innerHTML = '<header><h2>Gehörst du zum hohen Rat der Jedi?</h2></header><img onclick="rat()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtRat()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function rat(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Mensch?</h2></header><img onclick="mensch1()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtMensch1()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function mensch1(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du dunkelhäutig?</h2></header><img onclick="dunkelhäutig()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtDunkelhäutig()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function dunkelhäutig(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Mace Windu!</h2></header><img class="figur" src="Assets/Bilder/MaceWindu.png">';  
}

function nichtDunkelhäutig(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Obi-Wan Kenobi!</h2></header><img class="figur" src="Assets/Bilder/ObiWanKenobi.png">';  
}

function nichtMensch1(){
    document.getElementById("article").innerHTML = '<header><h2>Hast du Haare auf dem Kopf?</h2></header><img onclick="haare()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtHaare()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function haare(){
    document.getElementById("article").innerHTML = '<header><h2>Hast du eine grüne Hautfarbe?</h2></header><img onclick="grün()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtGrün()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function nichtGrün(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Ki-Adi-Mundi!</h2></header><img class="figur" src="Assets/Bilder/KiAdiMundi.png">';  
}

function grün(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Yoda!</h2></header><img class="figur" src="Assets/Bilder/Yoda.png">';  
}

function nichtHaare(){
    document.getElementById("article").innerHTML = '<header><h2>Hast du eine grüne Hautfarbe?</h2></header><img onclick="grün1()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtGrün1()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function grün1(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Kit Fisto!</h2></header><img class="figur" src="Assets/Bilder/KitFisto.png">';  
}

function nichtGrün1(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Plo Koon!</h2></header><img class="figur" src="Assets/Bilder/PloKoon.png">';  
}

function nichtRat(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du weiblich?</h2></header><img onclick="weiblich1()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtWeiblich1()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function weiblich1(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Mensch?</h2></header><img onclick="mensch2()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtMensch2()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function mensch2(){
    document.getElementById("article").innerHTML = '<header><h2>Bist/Warst du eine Prinzessin?</h2></header><img onclick="prinzessin()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtPrinzessin()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function prinzessin(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Leia Organa!</h2></header><img class="figur" src="Assets/Bilder/LeiaOrgana.png">';  
}

function nichtPrinzessin(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Rey Skywalker!</h2></header><img class="figur" src="Assets/Bilder/Rey.png">';  
}

function nichtMensch(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Ahsoka Tano!</h2></header><img class="figur" src="Assets/Bilder/AhsokaTano.png">';  
}

function nichtWeiblich1(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Spectre?</h2></header><img onclick="spectre1()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtSpectre1()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function spectre1(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du blind?</h2></header><img onclick="blind()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtBlind()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function blind(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Kanan Jarrus!</h2></header><img class="figur" src="Assets/Bilder/KananJarrus.png">';  
}

function nichtBlind(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Ezra Bridger!</h2></header><img class="figur" src="Assets/Bilder/EzraBridger.png">';  
}

function nichtSpectre1(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du klein?</h2></header><img onclick="klein()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtKlein()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function klein(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Grogu!</h2></header><img class="figur" src="Assets/Bilder/Grogu.png">';  
}

function nichtKlein(){
    document.getElementById("article").innerHTML = '<header><h2>Hast du die Schlacht von Yavin miterlebt?</h2></header><img onclick="vsy()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtVsy()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function vsy(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Luke Skywalker!</h2></header><img class="figur" src="Assets/Bilder/LukeSkywalker.png">';  
}

function nichtVsy(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Qui-Gon Jinn!</h2></header><img class="figur" src="Assets/Bilder/QuiGonJinn.png">';  
}


//Kopfgeldjäger/Söldner
function nichtJedi(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Kopfgeldjäger/Söldner?</h2></header><img onclick="kopfgeldjaeger()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtKopfgeldjaeger()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function kopfgeldjaeger(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du Mandalorianer?</h2></header><img onclick="mando()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtMando()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function mando(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Klon?</h2></header><img onclick="geklont()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtGeklont()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function geklont(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Boba Fett!</h2></header><img class="figur" src="Assets/Bilder/BobaFett.png">';  
}

function nichtGeklont(){
    document.getElementById("article").innerHTML = '<header><h2>Besitzt du eine Beskar-Lanze?</h2></header><img onclick="lanze()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtLanze()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function lanze(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Din Djarin!</h2></header><img class="figur" src="Assets/Bilder/DinDjarin.png">';  
}

function nichtLanze(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Jango Fett!</h2></header><img class="figur" src="Assets/Bilder/JangoFett.jpg">';  
}

function nichtMando(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Mensch?</h2></header><img onclick="oneHuman()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="noHuman()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function oneHuman(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Gildenboss?</h2></header><img onclick="gildenboss()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtGildenboss()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function gildenboss(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Greef Karga!</h2></header><img class="figur" src="Assets/Bilder/GreefKarga.png">';  
}

function nichtGildenboss(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Carasynthia Dune!</h2></header><img class="figur" src="Assets/Bilder/CaraDune.png">';  
}

function noHuman(){
    document.getElementById("article").innerHTML = '<header><h2>Wolltest du Han Solo umbringen?</h2></header><img onclick="han()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtHan()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function han(){
    document.getElementById("article").innerHTML = '<header><h2>Hast du Saugnäpfe an den Fingern?</h2></header><img onclick="haut()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtHaut()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function haut(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Greedo!</h2></header><img class="figur" src="Assets/Bilder/Greedo.png">';  
}

function nichtHaut(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Bossk!</h2></header><img class="figur" src="Assets/Bilder/Bossk.jpg">';  
}

function nichtHan(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du weiblich?</h2></header><img onclick="kopfgeldjägerin()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtKopfgeldjägerin()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function kopfgeldjägerin(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Aurra Sing!</h2></header><img class="figur" src="Assets/Bilder/AurraSing.png">';  
}

function nichtKopfgeldjägerin(){
    document.getElementById("article").innerHTML = '<header><h2>Besitzt du einen Hut aus Metall?</h2></header><img onclick="metallHut()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtMetallHut()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function metallHut(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Embo!</h2></header><img class="figur" src="Assets/Bilder/Embo.png">';  
}

function nichtMetallHut(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Cad Bane!</h2></header><img class="figur" src="Assets/Bilder/CadBane.png">';  
}


//inquisitor
function nichtKopfgeldjaeger(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Inquisitor?</h2></header><img onclick="inquisitor()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtInquisitor()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function inquisitor(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du weiblich?</h2></header><img onclick="frau()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtFrau()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function frau(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist die siebte Schwester!</h2></header><img class="figur" src="Assets/Bilder/SiebteSchwester.png">';  
}

function nichtFrau(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du der Anführer der Inquisitoren?</h2></header><img onclick="anführer()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtAnführer()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function anführer(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist der Großinquisitor!</h2></header><img class="figur" src="Assets/Bilder/Großinquisitor.png">';  
}

function nichtAnführer(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist der fünfte Bruder!</h2></header><img class="figur" src="Assets/Bilder/FünfterBruder.png">';  
}


//Verbrecher
function nichtInquisitor(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Verbrecher/Schmuggler?</h2></header><img onclick="verbrecher()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtVerbrecher()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function verbrecher(){
    document.getElementById("article").innerHTML = '<header><h2>Hast du den Rebellen geholfen?</h2></header><img onclick="rebellen()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtRebellen()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function rebellen(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Wookie?</h2></header><img onclick="wookie()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtWookie()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function wookie(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Chewbacca!</h2></header><img class="figur" src="Assets/Bilder/Chewbacca.png">';  
}

function nichtWookie(){
    document.getElementById("article").innerHTML = '<header><h2>Ist dein bester Freund ein Wookie?</h2></header><img onclick="freund()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtFreund()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function freund(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Han Solo!</h2></header><img class="figur" src="Assets/Bilder/HanSolo.png">';  
}

function nichtFreund(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Lando Calrissian!</h2></header><img class="figur" src="Assets/Bilder/LandoCalrissian.png">';  
}

function nichtRebellen(){
    document.getElementById("article").innerHTML = '<header><h2>Wurdest du umgebracht?</h2></header><img onclick="umgebracht()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtUmgebracht()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function umgebracht(){
    document.getElementById("article").innerHTML = '<header><h2>War Boba Fett dein Mörder?</h2></header><img onclick="boba()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtBoba()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function boba(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Bib Fortuna!</h2></header><img class="figur" src="Assets/Bilder/BibFortuna.png">';  
}

function nichtBoba(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Jabba the Hutt!</h2></header><img class="figur" src="Assets/Bilder/JabbaTheHutt.png">';  
}

function nichtUmgebracht(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du über 1000 Jahre alt?</h2></header><img onclick="über1000()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtÜber1000()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function über1000(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Maz Kanata!</h2></header><img class="figur" src="Assets/Bilder/MazKanata.jpg">';  
}

function nichtÜber1000(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Unkar Plutt!</h2></header><img class="figur" src="Assets/Bilder/UnkarPlutt.png">';  
}


//Imperialer
function nichtVerbrecher(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Imperialer/Erste Ordnung?</h2></header><img onclick="imperialer()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtImperialer()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function imperialer(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein General?</h2></header><img onclick="general()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtGeneral()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function general(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Cyborg?</h2></header><img onclick="cyborg()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtCyborg()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function cyborg(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist General Grievous!</h2></header><img class="figur" src="Assets/Bilder/Grievous.png">';  
}

function nichtCyborg(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist General Hux!</h2></header><img class="figur" src="Assets/Bilder/Hux.png">';  
}

function nichtGeneral(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du Moff/Großmoff?</h2></header><img onclick="moff()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtMoff()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function moff(){
    document.getElementById("article").innerHTML = '<header><h2>Warst du schonmal im Besitz des Dunkelschwerts?</h2></header><img onclick="dunkelschwert()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtDunkelschwert()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function dunkelschwert(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Moff Gideon!</h2></header><img class="figur" src="Assets/Bilder/Gideon.png">';  
}

function nichtDunkelschwert(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Großmoff Tarkin!</h2></header><img class="figur" src="Assets/Bilder/Tarkin.jpg">';  
}

function nichtMoff(){
    document.getElementById("article").innerHTML = '<header><h2>Hast du einen Doktortitel?</h2></header><img onclick="doktor()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtDoktor()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function doktor(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Doktor Pershing!</h2></header><img class="figur" src="Assets/Bilder/Pershing.png">';  
}

function nichtDoktor(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Mensch?</h2></header><img onclick="human()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtHuman()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function human(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Captain Phasma!</h2></header><img class="figur" src="Assets/Bilder/Phasma.png">';  
}

function nichtHuman(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Großadmiral Thrawn!</h2></header><img class="figur" src="Assets/Bilder/Thrawn.png">';  
}


//Klon
function nichtImperialer(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Klon?</h2></header><img onclick="klon()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtKlon()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function klon(){
    document.getElementById("article").innerHTML = '<header><h2>Führst du deine Einheit zusammen mit dem Jedi-Meister Ki-Adi-Mundi?</h2></header><img onclick="mundi()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtMundi()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function mundi(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Commander Bacara!</h2></header><img class="figur" src="Assets/Bilder/Bacara.jpeg">';  
}

function nichtMundi(){
    document.getElementById("article").innerHTML = '<header><h2>Gehörtest/Gehörst du zur 501. Legion?</h2></header><img onclick="legion501()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtLegion501()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function legion501(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du Commander/Captain?</h2></header><img onclick="captain()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtCaptain()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function captain(){
    document.getElementById("article").innerHTML = '<header><h2>Wurde dir dein Inhibitor-Chip entfernt?</h2></header><img onclick="entfernt()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtEntfernt()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function entfernt(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Captain Rex!</h2></header><img class="figur" src="Assets/Bilder/Rex.png">';  
}

function nichtEntfernt(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Commandant Appo!</h2></header><img class="figur" src="Assets/Bilder/Appo.jpg">';  
}

function nichtCaptain(){
    document.getElementById("article").innerHTML = '<header><h2>Hast du das Logo der Republik auf deinem Kopf abgebildet?</h2></header><img onclick="logo()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtLogo()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function logo(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Jesse!</h2></header><img class="figur" src="Assets/Bilder/Jesse.png">';  
}

function nichtLogo(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du hinter die Machenschaften von Palpatine gekommen?</h2></header><img onclick="hand()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtHand()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function hand(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Fives!</h2></header><img class="figur" src="Assets/Bilder/Fives.png">';  
}

function nichtHand(){
    document.getElementById("article").innerHTML = '<header><h2>Hattest du einen fehlerhaften Inhibitor-Chip im Kopf?</h2></header><img onclick="kaputt()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtKaputt()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function kaputt(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Tup!</h2></header><img class="figur" src="Assets/Bilder/Tup.png">';  
}

function nichtKaputt(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Echo!</h2></header><img class="figur" src="Assets/Bilder/Echo.png">';  
}

function nichtLegion501(){
    document.getElementById("article").innerHTML = '<header><h2>Ist deine Rüstung gelb-weiß?</h2></header><img onclick="gelb()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtGelb()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function gelb(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Commander Bly!</h2></header><img class="figur" src="Assets/Bilder/Bly.png">';  
}

function nichtGelb(){
    document.getElementById("article").innerHTML = '<header><h2>Gehörst du zur 212.?</h2></header><img onclick="die212()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nicht212()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function die212(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Commander Cody!</h2></header><img class="figur" src="Assets/Bilder/Cody.png">';  
}

function nicht212(){
    document.getElementById("article").innerHTML = '<header><h2>Trägst du schwarze Stiefel?</h2></header><img onclick="stiefel()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtStiefel()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function stiefel(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Commander Gree!</h2></header><img class="figur" src="Assets/Bilder/Gree.jpg">';  
}

function nichtStiefel(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du Klon-Kommandant der Coruscant-Wachen?</h2></header><img onclick="wache()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtWache()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function wache(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Commander Fox!</h2></header><img class="figur" src="Assets/Bilder/Fox.png">';  
}

function nichtWache(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Commander Neyo!</h2></header><img class="figur" src="Assets/Bilder/Neyo.jpg">';  
}


//Herrscher
function nichtKlon(){
    document.getElementById("article").innerHTML = '<header><h2>Bist/Warst du Senator/Herrscher/Oberhaupt?</h2></header><img onclick="herrscher()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtHerrscher()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function herrscher(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du auf Naboo geboren?</h2></header><img onclick="naboo()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtNaboo()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function naboo(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Gungan?</h2></header><img onclick="gungan()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtGungan()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function gungan(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Tollpatsch?</h2></header><img onclick="tollpatsch()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtTollpatsch()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function tollpatsch(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Jar Jar Bings!</h2></header><img class="figur" src="Assets/Bilder/JarJarBings.png">';  
}

function nichtTollpatsch(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Rugor Nass!</h2></header><img class="figur" src="Assets/Bilder/BossNass.png">';  
}

function nichtGungan(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Padmé Amidala!</h2></header><img class="figur" src="Assets/Bilder/PadmeAmidala.png">';  
}

function nichtNaboo(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Mensch?</h2></header><img onclick="einMensch()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="keinMensch()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function einMensch(){
    document.getElementById("article").innerHTML = '<header><h2>Gehörtest du zum Senat?</h2></header><img onclick="senat()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtSenat()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function senat(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du männlich?</h2></header><img onclick="mann()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtMann()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function mann(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Bail Organa!</h2></header><img class="figur" src="Assets/Bilder/BailOrgana.png">';  
}

function nichtMann(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Mon Mothma!</h2></header><img class="figur" src="Assets/Bilder/monMothma.png">';  
}

function nichtSenat(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Bo-Katan Kryze!</h2></header><img class="figur" src="Assets/Bilder/BoKatanKryze.png">';  
}

function keinMensch(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Ewok?</h2></header><img onclick="ewok()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtEwok()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function ewok(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Häuptling Chirpa!</h2></header><img class="figur" src="Assets/Bilder/Chirpa.jpg">';  
}

function nichtEwok(){
    document.getElementById("article").innerHTML = '<header><h2>Gehörst du zur Handelsföderation?</h2></header><img onclick="handelsföderation()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtHandelsföderation()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function handelsföderation(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Nute Gunray!</h2></header><img class="figur" src="Assets/Bilder/NuteGunray.jpg">';  
}

function nichtHandelsföderation(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Lama Su!</h2></header><img class="figur" src="Assets/Bilder/LamaSu.jpg">';  
}


//Widerstand/Rebellen
function nichtHerrscher(){
    document.getElementById("article").innerHTML = '<header><h2>Gehörst du zu den Rebellen/Widerstand?</h2></header><img onclick="widerstand()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtWiderstand()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function widerstand(){
    document.getElementById("article").innerHTML = '<header><h2>Hast du erst für das Imperium gearbeitet?</h2></header><img onclick="erstImperium()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtErstImperium()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function erstImperium(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du männlich?</h2></header><img onclick="männlich()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtMännlich()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function männlich(){
    document.getElementById("article").innerHTML = '<header><h2>Hattest du eine hohe Position im Imperium?</h2></header><img onclick="nichtSturmtruppler()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="sturmtruppler()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function sturmtruppler(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Finn!</h2></header><img class="figur" src="Assets/Bilder/Finn.png">';  
}

function nichtSturmtruppler(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Alexandr Kallus!</h2></header><img class="figur" src="Assets/Bilder/Kallus.jpg">';  
}

function nichtMännlich(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Sabine Wren!</h2></header><img class="figur" src="Assets/Bilder/SabineWren.png">';  
}

function nichtErstImperium(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Mensch?</h2></header><img onclick="menschlich()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtMenschlich()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function menschlich(){
    document.getElementById("article").innerHTML = '<header><h2>Hast du zur die Klonkriege miterlebt?</h2></header><img onclick="klonkriege()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtKlonkriege()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function klonkriege(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Saw Gerrera!</h2></header><img class="figur" src="Assets/Bilder/SawGerrera.png">';  
}

function nichtKlonkriege(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Poe Dameron!</h2></header><img class="figur" src="Assets/Bilder/PoeDameron.png">';  
}

function nichtMenschlich(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Spectre?</h2></header><img onclick="spectre()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtSpectre()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function spectre(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du Pilot?</h2></header><img onclick="pilot()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtPilot()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function pilot(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Hera Syndulla!</h2></header><img class="figur" src="Assets/Bilder/HeraSyndulla.png">';  
}

function nichtPilot(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Garazeb Orrelios!</h2></header><img class="figur" src="Assets/Bilder/ZebOrrelios.png">';  
}

function nichtSpectre(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Gial Ackbar!</h2></header><img class="figur" src="Assets/Bilder/GialAckbar.png">';  
}


//Lukes Familie
function nichtWiderstand(){
    document.getElementById("article").innerHTML = '<header><h2>Hast du ein Kind erzogen bis es zu einem Padawan wurde?</h2></header><img onclick="lukeFamilie()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtLukeFamilie()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function lukeFamilie(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du weiblich?</h2></header><img onclick="weiblich()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtWeiblich()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function weiblich(){
    document.getElementById("article").innerHTML = '<header><h2>Hast du geheiratet?</h2></header><img onclick="heirat()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtHeirat()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function heirat(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Beru Lars!</h2></header><img class="figur" src="Assets/Bilder/BeruLars.png">';  
}

function nichtHeirat(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Shmi Skywalker!</h2></header><img class="figur" src="Assets/Bilder/ShmiSkywalker.png">';  
}

function nichtWeiblich(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Owen Lars!</h2></header><img class="figur" src="Assets/Bilder/Owen.jpg">';
}


//Übrig
function nichtLukeFamilie(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du machtsensitiv?</h2></header><img onclick="machtsensitiv()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtMachtsensitiv()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function machtsensitiv(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Bendu!</h2></header><img  class="figur" src="Assets/Bilder/Bendu.png">';
}

function nichtMachtsensitiv(){
    document.getElementById("article").innerHTML = '<header><h2>Bist du ein Mensch?</h2></header><img onclick="mensch()" class="antwort" src="Assets/Bilder/Ja.png" alt="ja"><img onclick="nichtMensch()" class="antwort" src="Assets/Bilder/Nein.png" alt="nein">';
}

function mensch(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Lor San Tekka!</h2></header><img  class="figur" src="Assets/Bilder/LorSanTekka.png">';
}

function nichtMensch(){
    document.getElementById("article").innerHTML = '<header><h2>Du bist Kuiil!</h2></header><img class="figur" src="Assets/Bilder/Kuiil.png" alt="ja">';
}