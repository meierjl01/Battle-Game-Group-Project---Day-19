function Character(name, special, picture, specialGif){
  'use strict';
  this.name=name;
  this.health=10;
  this.special=special;
  this.picture=picture;
  this.specialGif=specialGif;
}
var Lisa= new Character('Lisa',"Super SAX", "pics/lisa.png", 'pics/atleastyoutried.gif');
var Bart= new Character('Bart', 'super SKATEBOARD','pics/bart.png');
var Homer= new Character('Homer');



Character.prototype.specialPower = function(user, boss) {
  $('h3').empty();
  boss.health = boss.health-2;
  var newHealth = $('<h3>Health'+boss.health+'</h3>');
  $('.compChar').prepend(newHealth);
$('.versusText').hide();
var attackGif = $('<img src="'+user.specialGif+'"/>');
console.log($('.versus'));
$('.versus').append(attackGif);
  setTimeout(function() {
$('.versusText').show();
attackGif.hide();
  }, 4000);
  $('.attack').prop('disabled', true);
  $('.block').prop('disabled', true);
$('.special').prop('disabled', true);
// homerPick();
  setTimeout(function() {
    $('.attack').prop('disabled', false);
    $('.block').prop('disabled', false);
  }, 8000);
};

Character.prototype.attack = function(user, boss) {
  $('h3').empty();
  boss.health = boss.health-1;
  var newHealth = $('<h3>Health'+boss.health+'</h3>');
  $('.compChar').prepend(newHealth);
$('.versusText').hide();
var attackGif = $('<img src="'+user.attackGif+'"/>');
console.log($('.versus'));
$('.versus').append(attackGif);
  setTimeout(function() {
$('.versusText').show();
attackGif.hide();
  }, 4000);
  $('.attack').prop('disabled', true);
  $('.block').prop('disabled', true);
  $('.special').prop('disabled', true);
// homerPick();
  setTimeout(function() {
    $('.attack').prop('disabled', false);
    $('.block').prop('disabled', false);
    $('.special').prop('disabled', false);
  }, 8000);
};
Character.prototype.block = function(user, boss) {
  $('h3').empty();
  Homer.health = Homer.health-1;
  var newHealth = $('<h3>Health'+character.health+'</h3>');
  $('.compChar').prepend(newHealth);
  $('.versus').empty();
  var attackGif = $('<img src="'+Character.attackGif+'"/>');
  $('.versus').append(attackGif);
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
