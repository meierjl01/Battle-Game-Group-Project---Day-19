function Character(name, special, picture){
  'use strict';
  this.name=name;
  this.health=10;
  this.special=special;
  this.picture=picture;
}

var Lisa= new Character('Lisa',"Super SAX", "pics/lisa.png");
var Bart= new Character('Bart', 'super SKATEBOARD','pics/bart.png');
var Homer= new Character('Homer');



















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
