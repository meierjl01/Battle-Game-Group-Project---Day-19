function Character(name, special, picture, specialGif,attackGif,blockGif,winGif){
  'use strict';
  this.name=name;
  this.health=10;
  this.special=special;
  this.picture=picture;
  this.specialGif=specialGif;
  this.attackGif=attackGif;
  this.blockGif=blockGif;
  this.winGif=winGif;
}


var Lisa= new Character('Lisa',"Super SAX", "pics/lisa.png","pics/lisasax.gif","pics/lisaduck.gif","pics/lisaheal.gif","pics/lisa.gif");

var Bart= new Character('Bart', 'super SKATEBOARD','pics/bart.png',"pics/skateboard.gif","pics/barthittinghomer.gif","pics/bartheal.gif","pics/atleastyoutried.gif");
var Homer= new Character('Homer','super Burp',"pics/homer.png","pics/homer.gif","pics/homechokelia.gif","pics/homerheal.gif","pics/homerwinning.gif");



Character.prototype.specAttack = function(name) {
  var special=Math.floor(Math.random()*4)+1;
  name.health = name.health-special;

};
Character.prototype.attack = function(name) {
  var attack=Math.floor(Math.random()*3)+1;
  name.health = name.health-attack;
};
Character.prototype.heal = function(name) {
  var defend=Math.floor(Math.random()*2)+1;
  name.health=name.health+defend;
};








// function hashChangeEvent(e){
//   var siteLocation=location.hash;
//
//   if(siteLocation ===''){
//     console.log("something");
//     renderHomePage();
//   } else if(siteLocation ==='#battle'){
//     battleRender(character);
//   }else if(siteLocation ==='#gameover'){
//     renderGameOver(character);
//   }
// }
//
// $(window).on('hashchange',hashChangeEvent);
// hashChangeEvent();
