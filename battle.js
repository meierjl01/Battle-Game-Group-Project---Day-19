var main = $('main');
var header = $('header');
var screenDiv = $('.screen');
function battleRender (character) {
  screenDiv.empty();
  //change based on character user selected
  var userDiv = $('<div class="userChar">'+
//health will change when opponent attacks
'<h3>Health: '+character.health+'</h3>'+
'<h2>'+character.name+'</h2>'+
'<img class = "char-pic" src="'+character.picture+'"/>'+
'<button class="attack">Attack</button>'+
'<button class="block">Block</button>'+
//change innerText for super based on character
'<button class="special">'+character.special+'</button></div>');
var versusDiv = $('<div class="versus"><h6 class="versusText">VERSUS</h6></div>');
  var compDiv = $('<div class="compChar">'+
  //health change when user attacks
'<h3>Health: '+Homer.health+'</h3>'+
'<h2>Homer</h2>'+
'<img class="homer-pic"src="pics/homer.png"/>'+
'</div>');
screenDiv.append(userDiv,versusDiv, compDiv);
//fighting stuff
console.log('your linked up!');
$('.special').on('click', function(e) {
  Character.prototype.specialPower(character, Homer);
});
$('.attack').on('click', function(e) {
  Character.prototype.attack(character, Homer);
});
}
// battleRender();
