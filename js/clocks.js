
/*
 * Un petit script mesurant l'écoulement du temps
 *
 * Source: https://codepen.io/Tcip/pen/BNKjeN
 * Auteur: Mikael Elmblad, tcip.se
*/

// répéter la fonction metronone une fois par seconde

var myVar = setInterval(function() {
  metronome();
}, 1000);

// coloriser un élément SVG

// paramètres SVG:
// stroke-width
// stroke

// document.getElementById("seconde").style.stroke = '#00ff00';

document.querySelector("#seconde").style.stroke = '#00ffff';
document.querySelector("#seconde").style.strokeWidth = 3;
// document.querySelector("#seconde").style.transform = 'translate(0,-20%) rotate(-3deg)';
// document.getElementById("seconde").style.display = 'none';
// Changer la position:

// Cloner un élément:

// Get the last <li> element ("Milk") of <ul> with id="myList2"
var itm = document.getElementById("seconde");

// Copy the element
var cln = itm.cloneNode(true);

// Change the elment
cln.id = 'seconde1';
cln.style.stroke = '#ff0000';
cln.style.transform = 'translate(50%,50%) rotate(-0deg)';

// Append the cloned element to something
document.getElementById("vector").appendChild(cln);


function metronome() {

  // 1: on définit l'heure, avec l'objet Date()
  // voir documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date

  var d = new Date(); // 2: ceci produit la date

  // Sélectionner la seconde et la dupliquer:


  // 2: on affiche l'heure dans notre objet "horloge"

  // document.getElementById("horloge").innerHTML = d.toLocaleTimeString();

}
