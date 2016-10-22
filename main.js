function Character(name, special, picture, specialGif,attackGif,healGif,winGif){
  'use strict';
  this.name=name;
  this.health=20;
  this.special=special;
  this.picture=picture;
  this.specialGif=specialGif;
  this.attackGif=attackGif;
  this.healGif=healGif;
  this.winGif=winGif;
}


var Lisa= new Character('Lisa',"Super SAX", "pics/lisa.png","pics/lisasax.gif","pics/lisaduck.gif","pics/lisaheal.gif","pics/lisa.gif");

var Bart= new Character('Bart', 'super SKATEBOARD','pics/bart.png',"pics/skateboard.gif","pics/barthittinghomer.gif","pics/bartheal.gif","pics/atleastyoutried.gif");
var Homer= new Character('Homer','super Burp',"pics/homer.png","pics/homer.gif","pics/homechokelisa.gif","pics/homerheal.gif","pics/homerwinning.gif");



Character.prototype.specAttack = function(name) {
  var special=Math.floor(Math.random()*4)+1;
  console.log(special);
name.health = name.health-special;
  var criticalHit=$('<h5 class="critcial">WOW CRITICAL HIT!!! -'+special+'</h5>');
  var regularHit=$('<h5>Hit did '+special+' damage</h5>');
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
  var criticalHit=$('<h5 class="critcial">WOW CRITICAL HIT!!! -'+attack+'</h5>');
  var regularHit=$('<h5>Hit did '+attack+' damage</h5>');
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
  var healMessage=$('<h5 class="critcial">WOW Super heal Bro! +'+heal+'</h5>');
  var regularHeal=$('<h5>That wasn\'t much healing bro...+ '+heal+' health added</h5>');
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
