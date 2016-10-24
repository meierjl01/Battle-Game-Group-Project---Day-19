function Character(name, special, picture, specialGif,attackGif,healGif, dyingPic,winGif,attackSound,specialSound,healSound,winSound){
  'use strict';
  this.name=name;
  this.health=20;
  this.special=special;
  this.picture=picture;
  this.specialGif=specialGif;
  this.attackGif=attackGif;
  this.healGif=healGif;
  this.dyingPic=dyingPic;
  this.winGif=winGif;
  this.attackSound= new Audio(attackSound);
  this.specialSound= new Audio(specialSound);
  this.healSound= new Audio(healSound);
  this.winSound= new Audio(winSound);
  // this.injuredSound= new Audio(injuredSound);
}


var Lisa= new Character('Lisa',"Super SAX", "pics/lisa.png","pics/lisasax.gif","pics/lisaduck.gif","pics/lisaheal.gif","pics/dyinglisa.png","pics/lisa.gif",'pics/Slap-SoundMaster13-49669815.mp3',"pics/law_has_spoken.wav", "pics/Lisalaugh.mp3","pics/careless_whispers.mp3");
var Bart= new Character('Bart', 'super SKATEBOARD','pics/bart.png',"pics/skateboard.gif","pics/barthittinghomer.gif","pics/bartheal.gif","pics/dyingbart.jpg","pics/atleastyoutried.gif",'pics/Slap-SoundMaster13-49669815.mp3',"pics/Homer - Falling scream.wav","pics/Bart - Shut yer yap.wav", "pics/homerdontfeelsogood.wav");
var Homer= new Character('Homer','super Burp',"pics/homer.png","pics/homer.gif","pics/homechokelisa.gif","pics/homerheal.gif","pics/dyinghomer.jpg","pics/homerwinning.gif",'pics/Slap-SoundMaster13-49669815.mp3' ,"pics/Homer - Nighty night.wav", "pics/Homer - Woohoo! (1).wav", "pics/Homerchampion.wav");



Character.prototype.specAttack = function(name) {
  var special=Math.floor(Math.random()*4)+1;
  console.log(special);
name.health = name.health-special;
  var criticalHit=$('<h5 class="critical">WOW CRITICAL HIT!!! That Special move did '+special+' points of damage!</h5>');
  var regularHit=$('<h5 class="regular">That Special move did '+special+ ' points of damage</h5>');
  var vs=$('.versus');
  if(special>=3){
   vs.prepend(criticalHit);
   setTimeout(function(){
     criticalHit.hide();
   },2000);
 }else if(special<=2){
   vs.prepend(regularHit);
   setTimeout(function(){
     regularHit.hide();
   },2000);
 }

};
Character.prototype.attack = function(name) {
  var attack=Math.floor(Math.random()*3)+1;
  name.health = name.health-attack;
  var criticalHit=$('<h5 class="critical">WOW CRITICAL HIT!!! That hit did '+attack+' points of damage!</h5>');
  var regularHit=$('<h5 class="regular">That attack did '+attack+' points of damage!</h5>');
  var vs=$('.versus');
  if(attack>=2){
   vs.prepend(criticalHit);
   setTimeout(function(){
     criticalHit.hide();
   },2000);
 }else if(attack<2){
   vs.prepend(regularHit);
   setTimeout(function(){
     regularHit.hide();
   },2000);
 }

};
Character.prototype.heal = function(name) {
  var heal=Math.floor(Math.random()*2)+1;
  name.health=name.health+heal;
  var healMessage=$('<h5 class="critical">WOW Superduper heal Bro! +'+heal+' health added!!</h5>');
  var regularHeal=$('<h5 class="regular">That wasn\'t much healing bro...+ '+heal+' health added</h5>');
  var vs=$('.versus');
  if(heal===2){
   vs.prepend(healMessage);
   setTimeout(function(){
     healMessage.hide();
   },2000);
 }else if(heal ===1){
   vs.prepend(regularHeal);
   setTimeout(function(){
     regularHeal.hide();
   },2000);
 }

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
