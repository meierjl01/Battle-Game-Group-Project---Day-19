var header=$('header');
var main= $('main');
var title=$('<h1 class="home-title">THE ULTIMATE SIMPSONS FIGHTING GAME</h1><h2>Choose Your Character!</h2>');
var lisaCharacter=$('<div class="character lisa"><img src="pics/Lisa.png"><p>Lisa Simpson is a ruthless character and has a huge thirst for blood. She is top of her class and #1 in kickin ass! She plays a mean sax and has the brains to defeat any character in her way</p></div>');
var bartCharacter=$('<div class="character bart"><img src="pics/bart.png"><p>Bart Simpson is a rad dude. He has a ton of friends and is the coolest kid around. Hes got a blackbelt in karate and pranks like no other. This character is a force to be reckoned with.</p></div>');
var homerCharacter=$('<div class="computer"><img src="pics/homer.png"><p>Homer Simpson is a mean drunk. When not drinking duff beers and eating donuts, you can find him beating up his kids and driving his car drunk into his house.</p></div>');

function renderHomepage(){
header.append(title);
main.append(lisaCharacter,bartCharacter,homerCharacter);
//add click handlers to each character
$('.lisa').on('click',function(e){
 battleRender(Lisa);
});
$('.bart').on('click',function(e){
  battleRender(Bart);
});
  //when character is clicked others fade away and selected grows
  //boss character and character selected is only in view
  // vs is added and a little loading screen after 5 seconds
  //battle page is rendered

}
renderHomepage();
