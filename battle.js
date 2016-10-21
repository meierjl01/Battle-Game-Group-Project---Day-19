var main = $('main');
var header = $('header');
var screenDiv = $('.screen');
function battleRender (character) {
  screenDiv.empty();
  //change based on character user selected
  var userDiv = $('<div class="userChar">'+
//health will change when opponent attacks
'<h3 class="charHealth">Health: '+character.health+'</h3>'+
'<h2>'+character.name+'</h2>'+
'<img class = "char-pic" src="'+character.picture+'"/>'+
'<button class="attack">Attack</button>'+
'<button class="block">Block</button>'+
//change innerText for super based on character
'<button class="special">'+character.special+'</button></div>');
var versusDiv = $('<div class="versus"><h6 class="versusText">VERSUS</h6></div>');
  var compDiv = $('<div class="compChar">'+
  //health change when user attacks
'<h3 class="bossHealth">Health: '+Homer.health+'</h3>'+
'<h2>Homer</h2>'+
'<img class="homer-pic"src="pics/homer.png"/>'+
'</div>');
screenDiv.append(userDiv,versusDiv, compDiv);
//fighting stuff







$('.special').on('click', function(e) {
  character.specAttack(Homer);
  $('.bossHealth').text("health: "+Homer.health);
$('.versusText').hide();
var attackGif = $('<img src="'+character.specialGif+'"/>');
$('.versus').append(attackGif);
  setTimeout(function() {
    $('.attack').prop('disabled', false);
    $('.block').prop('disabled', false);
$('.versusText').show();
attackGif.hide();
  }, 4000);
  $('.attack').prop('disabled', true);
  $('.block').prop('disabled', true);
$('.special').prop('disabled', true);

setTimeout(function() {
  Homer.specAttack(character);
  $('.charHealth').text("health: "+character.health);
  $('.versusText').hide();
  var attackGif = $('<img src="'+character.specialGif+'"/>');
  $('.versus').append(attackGif);
  }, 4000);
});
$('.attack').on('click', function(e) {
  Character.prototype.attack(character, Homer);
  if(character.health<=0 || Homer.health<=0){
    renderGameOver();
  }
});
$('.block').on('click',function(e){
  character.block(character);
});

}


// battleRender();
