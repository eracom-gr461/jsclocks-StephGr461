
/*
 * Un petit script mesurant l'écoulement du temps
 *
 * Source: https://codepen.io/Tcip/pen/BNKjeN
 * Auteur: Mikael Elmblad, tcip.se
*/

//afficher une alerte hello world
alert("hello world");
//afficher un message dans le console
console.log("bonjour");
// répéter la fonction metronone une fois par seconde

var myVar = setInterval(function() {
  metronome();
}, 1000);


function metronome() {

  // 1: on définit l'heure, avec l'objet Date()
  // voir documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date

  var d = new Date(); // 2: ceci produit la date

  // 2: on affiche l'heure dans notre objet "horloge"

  document.getElementById("horloge").innerHTML = d.toLocaleTimeString();

}
