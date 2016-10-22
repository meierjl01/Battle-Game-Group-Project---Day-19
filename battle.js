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
'<button class="heal">Heal</button>'+
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
  var VS=$('.versusText');
  var bossHealth=$('.bossHealth');
  var characterHealth=$('.charHealth');
  var specialGif = $('<img class="specialGif" src="'+character.specialGif+'"/>');
 var bossGif=$('<img class="bossGif" src="'+Homer.specialGif+'">');
 var specialAttackname=$('<p class="attack-name">You attacked Homer with a '+character.special+'</p>');
 var bossSpecialAttackName=$('<p>Homer attacked you with a '+Homer.special+'</p>');
  character.specAttack(Homer);
  bossHealth.text("health: "+Homer.health);

versusDiv.append(specialGif);
versusDiv.append(specialAttackname);
 setTimeout(function() {
$('.attack').prop('disabled', false);
$('.block').prop('disabled', false);
specialGif.hide();
specialAttackname.hide();
}, 2000);
  $('.attack').prop('disabled', true);
  $('.block').prop('disabled', true);
$('.special').prop('disabled', true);

setTimeout(function(){
  versusDiv.append(bossGif);
  versusDiv.append(bossSpecialAttackName);
  Homer.specAttack(character);
  characterHealth.text("health: "+character.health);

},3000);
setTimeout(function(){
  bossGif.hide();
  bossSpecialAttackName.hide();
},5000);



  if(character.health<=0){
    renderGameOver(Homer);
  } else if (Homer.health <=0){
    renderGameOver(character);
  }
});
$('.attack').on('click', function(e) {
  Character.prototype.attack(character, Homer);
  if(character.health<=0){
    renderGameOver(Homer);
  } else if (Homer.health <=0){
    renderGameOver(character);
  }
});
$('.block').on('click',function(e){
  character.block(character);
});

}


// battleRender();
