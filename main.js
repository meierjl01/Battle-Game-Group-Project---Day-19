function Character(name, special, picture, specialGif){
  'use strict';
  this.name=name;
  this.health=10;
  this.special=special;
  this.picture=picture;
  this.specialGif=specialGif;
}


var Lisa= new Character('Lisa',"Super SAX", "pics/lisa.png");

var Lisa= new Character('Lisa',"Super SAX", "pics/lisa.png", 'pics/atleastyoutried.gif');

var Bart= new Character('Bart', 'super SKATEBOARD','pics/bart.png');
var Homer= new Character('Homer');



Character.prototype.specAttack = function(name) {
  var special=Math.floor(Math.random()*4)+1;
name.health = name.health-special;

};

Character.prototype.attack = function(name) {
  var attack=Math.floor(Math.random()*3)+1;
  name.health = name.health-attack;
};
Character.prototype.block = function(name) {
  var defend=Math.floor(Math.random()*3)+1;
  name.health=name.health+defend;
};

//
// var HomerAttacks = [Character.prototype.specialPower(Homer, Lisa), Character.prototype.attack(Homer, Lisa), Character.prototype.block(Homer, Lisa)];
// function homerPick () {
//   var shuffle = _.shuffle(HomerAttacks);
//   var attackPick = _.first(shuffle);
//   console.log(attackPick);
// }












function hashChangeEvent(e){
  var siteLocation=location.hash;

  if(siteLocation===''){
    console.log("something");
  } else if(siteLocation==='#battle'){
    console.log("battle");
  }else if(siteLocation==='#gameover'){
    console.log("yousuck!");
  }
}

$(window).on('hashchange',hashChangeEvent);
hashChangeEvent();
