function Character(name){
  'use strict';
  this.name=name;
  this.health=10;
}
var Lisa= new Character('Lisa');
var Bart= new Character('Bart');
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
