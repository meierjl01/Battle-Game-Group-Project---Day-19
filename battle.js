var main = $('main');
var header = $('header');
var screenDiv = $('.screen');
function battleRender (character) {
  main.empty();
  header.empty();
  screenDiv.empty();
  //change based on character user selected
  var userDiv = $('<div class="userChar">'+
//health will change when opponent attacks
'<h3>'+character.health+'</h3>'+
'<h2>'+character.name+'</h2>'+
'<img src="'+character.picture+'"/>'+
'<button class="attack">Choke</button>'+
'<button class="block">Block</button>'+
//change innerText for super based on character
'<button class="super">'+character.super+'</button></div>');

  var compDiv = $('<div class="compChar">'+
  //health change when user attacks
'<h3>Health</h3>'+
'<h2>Homer</h2>'+
'<img src="pics/homer.png"/>'+
'</div>');
main.append(userDiv, compDiv);
}
// battleRender();
console.log('your linked up!');
